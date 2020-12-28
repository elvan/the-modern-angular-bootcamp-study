import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  pluck,
  switchMap,
  toArray,
} from 'rxjs/operators';
import { openWeatherMapKey } from 'src/config/openweathermap';

interface GeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}

interface ForecastResponse {
  list: {
    dt_text: string;
    main: {
      temp: number;
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private url = 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(private httpClient: HttpClient) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', openWeatherMapKey);
      }),
      switchMap((params) =>
        this.httpClient.get<ForecastResponse>(this.url, {
          params: params,
        })
      ),
      pluck('list'),
      mergeMap((value) => of(...value)),
      filter((value, index) => index % 8 === 0),
      map((value) => {
        return {
          dateString: value.dt_text,
          temp: value.main.temp,
        };
      }),
      toArray()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
