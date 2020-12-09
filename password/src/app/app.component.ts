import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = true;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onButtonClick() {
    this.password = 'MY PASSWORD!!!';
  }
}
