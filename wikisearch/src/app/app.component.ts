import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wikisearch';

  onTermSubmitted(term: string) {
    console.log(`I am the app and here is the search term`, term);
  }
}
