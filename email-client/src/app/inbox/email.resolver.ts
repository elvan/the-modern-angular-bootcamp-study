import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<Email> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Email {
    return {
      id: 'asd',
      subject: 'asd',
      text: 'asd',
      to: 'asd',
      from: 'asd',
      html: 'asd',
    };
  }
}
