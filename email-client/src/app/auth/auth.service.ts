import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

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
    return this.httpClient.post<SignUpResponse>(`${this.rootUrl}/auth/signup`, {
      username: credentials.username,
      password: credentials.password,
      passwordConfirmation: credentials.passwordConfirmation,
    });
  }
}
