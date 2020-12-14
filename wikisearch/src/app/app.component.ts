import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipediaService: WikipediaService) {}

  onTermSubmitted(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      console.log(response);
    });
  }
}
