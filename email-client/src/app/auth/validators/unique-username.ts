import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.httpClient
      .post('https://api.angular-email.com/auth/username', { username: value })
      .pipe(
        map((value) => {
          return null;
        }),
        catchError((err) => {
          if (err.error.username) {
            return of({ nonUniqueUsername: true });
          }
          return of({ noConnection: true });
        })
      );
  };
}
