import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authService: AuthService) {
    this.email = {
      id: '',
      subject: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`,
      to: '',
      html: '',
    };
  }

  ngOnInit(): void {}
}
