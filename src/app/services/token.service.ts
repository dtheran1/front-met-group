import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    setCookie('token', token, { expires: 365, path: '/' });
  }
  getToken() {
    const token = getCookie('token');
    return token;
  }
  removeToken() {
    removeCookie('token');
  }
  isValidToken() {
    const token = this.getToken();
    if (!token) return;

    const decodedToken = jwt_decode<JwtPayload>(token);
    if (decodedToken && decodedToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodedToken.exp);

      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }
    return false;
  }

}
