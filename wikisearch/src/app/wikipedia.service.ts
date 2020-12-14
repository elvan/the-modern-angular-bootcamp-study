import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  search(term: string): string {
    return `I am a wikipedia service search result ${term}`;
  }
}
