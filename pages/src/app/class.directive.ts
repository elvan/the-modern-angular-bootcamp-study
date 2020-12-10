import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input() backgroundColor = '';
  constructor(private elementRef: ElementRef) {
    // NEVER DO THIS!!!
    setTimeout(() => {
      this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    }, 100);
  }
}
