import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { HomeComponent } from './home/home.component';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
  ],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
