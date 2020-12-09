import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  length: number = 8;
  includeLetters: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  onChangeLength(value: number): void {
    if (!isNaN(value)) {
      this.length = value;
    }
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(): void {
    this.password = 'MY PASSWORD!!!';

    console.log(`
    About to generate a password with the following:
    Length: ${this.length}
    Use Letters: ${this.includeLetters}
    Use Numbers: ${this.includeNumbers}
    Use Symbols: ${this.includeSymbols}
    `);
  }
}
