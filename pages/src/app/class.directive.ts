import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private elementRef: ElementRef) {}

  @Input('appClass') set backgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
