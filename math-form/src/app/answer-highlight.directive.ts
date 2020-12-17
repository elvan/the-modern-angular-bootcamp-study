import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges.pipe(
      map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))),
    ).subscribe((value) => {
      if (value < 0.2) {
        this.elementRef.nativeElement.classList.add('close');
      } else {
        this.elementRef.nativeElement.classList.remove('close');
      }
    });
  }
}
