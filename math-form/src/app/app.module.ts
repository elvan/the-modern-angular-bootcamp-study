import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AnswerHighlightDirective} from './answer-highlight.directive';
import {AppComponent} from './app.component';
import {EquationComponent} from './equation/equation.component';

@NgModule({
  declarations: [AppComponent, EquationComponent, AnswerHighlightDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
