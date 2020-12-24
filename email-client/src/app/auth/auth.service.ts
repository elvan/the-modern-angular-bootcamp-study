import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameResponse {
  available: boolean;
}

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username: username,
      }
    );
  }

  signUp(credentials: SignUpCredentials) {
    return this.httpClient
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, {
        username: credentials.username,
        password: credentials.password,
        passwordConfirmation: credentials.passwordConfirmation,
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.httpClient
      .get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  signOut() {
    return this.httpClient.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
}
