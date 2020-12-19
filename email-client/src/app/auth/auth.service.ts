import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username: username,
      }
    );
  }

  signUp(credentials: any) {
    return this.httpClient.post<any>(
      'https://api.angular-email.com/auth/signup',
      {
        username: credentials.username,
        password: credentials.password,
        passwordConfirmation: credentials.passwordConfirmation,
      }
    );
  }
}
