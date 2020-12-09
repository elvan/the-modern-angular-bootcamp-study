import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = 'MY PASSWORD!!!';

    console.log(`
    About to generate a password with the following:
    Use Letters: ${this.includeLetters}
    Use Numbers: ${this.includeNumbers}
    Use Symbols: ${this.includeSymbols}
    `);
  }
}
