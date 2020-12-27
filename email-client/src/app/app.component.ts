import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;
  username$: BehaviorSubject<string>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
    this.username$ = this.authService.username$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }
}
