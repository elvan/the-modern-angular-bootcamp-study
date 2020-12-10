import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = lorem.sentence();
  enteredText: string = '';

  onInput(value: string): void {
    this.enteredText = value;
    console.log(this.enteredText);
  }
}
