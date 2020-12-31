import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

import { UserModel } from './sign';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    return this.http.post(`${environment.api}/auth/register`, user);
  }
}
