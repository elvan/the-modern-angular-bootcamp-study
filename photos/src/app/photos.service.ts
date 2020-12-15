import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhoto() {
    return this.httpClient.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID hnV0NPi9FwTbHvNLQHY70VpwFL2n2fqn-EXHVdHuxHA',
        },
      }
    );
  }
}
