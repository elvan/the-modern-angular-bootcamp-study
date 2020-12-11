import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
