import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  pluck,
  share,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';
import { openWeatherMapKey } from 'src/config/openweathermap';
import { NotificationsService } from '../notifications/notifications.service';

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
    dt_txt: string;
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

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationsService
  ) {}

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
          dateString: value.dt_txt,
          temp: value.main.temp,
        };
      }),
      toArray(),
      share()
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
    }).pipe(
      tap(() => {
        this.notificationService.addSuccess('Got current location');
      }),
      catchError((error) => {
        this.notificationService.addError('Failed to get current location');
        return throwError(error);
      })
    );
  }
}
