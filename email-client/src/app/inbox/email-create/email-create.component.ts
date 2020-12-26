import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor() {
    this.email = {
      id: '',
      subject: '',
      text: '',
      from: 'user@example.com',
      to: '',
      html: '',
    };
  }

  ngOnInit(): void {}
}
