import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {
  messages$: Observable<Command[]>;

  constructor(private notificationService: NotificationsService) {
    this.messages$ = notificationService.messagesOutput;
  }

  ngOnInit(): void {}

  clearMessage(id: number) {
    this.notificationService.clearMessage(id);
  }
}
