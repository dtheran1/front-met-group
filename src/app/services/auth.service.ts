import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { ResposeLogin } from '../models/auth.model';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { checkToken } from '../interceptors/token.interceptor';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {}
  getDataUser() {
    return this.user$.getValue();
  }
  login(username: string, password: string) {
    return this.http
      .post<ResposeLogin>(`${this.apiUrl}/auth`, {
        username,
        password,
      })
      .pipe(
        tap((res) => {
          this.tokenService.saveToken(res.token);
        })
      );
  }

  register(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      password,
    });
  }
  logout() {
    this.tokenService.removeToken();
  }
}
