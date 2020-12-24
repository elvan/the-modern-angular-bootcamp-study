import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
