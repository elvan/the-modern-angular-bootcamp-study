import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate = (
    control: FormControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> => {
    const { value } = control;
    console.log(this.httpClient);
    return of({ nonUniqueUsername: true });
  };
}
