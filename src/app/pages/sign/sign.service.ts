import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

import { UserModel } from './sign';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private subjUser$: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    return this.http.post(`${environment.api}/auth/register`, user);
  }

  confirm(token) {
    return this.http.get(`${environment.api}/auth/confirm/${token}`);
  }

  login(user: UserModel) {
    return this.http.post(`${environment.api}/auth/authenticate`, user)
      .pipe(
        tap(u => {
          localStorage.setItem('token', u['token']);
          this.subjLoggedIn$.next(true);
          this.subjUser$.next(u);
        })
      )
  }

  reset(user: UserModel) {
    const { email } = user;
    return this.http.post(`${environment.api}/auth/forgot_password`, {email} );
  }

  newPassword(body) {
    return this.http.post(`${environment.api}/auth/reset_password`, body );
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if(token && !this.subjLoggedIn$.value) {
      this.subjLoggedIn$.next(true);
    }
    return this.subjLoggedIn$.asObservable();
  }

  getUser() {
    return this.subjUser$.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.subjLoggedIn$.next(false);
  }
}
