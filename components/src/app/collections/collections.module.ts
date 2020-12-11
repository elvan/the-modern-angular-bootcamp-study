import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CollectionsRoutingModule } from './collections-routing.module';

@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
