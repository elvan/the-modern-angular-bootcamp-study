import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      pageid: number;
      snippet: string;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  search(term: string) {
    return this.httpClient
      .get<WikipediaResponse>('http://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          origin: '*',
          srsearch: term,
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
