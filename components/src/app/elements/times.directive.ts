import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(lines: number) {
    this.viewContainerRef.clear();

    for (let i = 0; i < lines; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}