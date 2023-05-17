import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { checkToken } from '../interceptors/token.interceptor';
import { ResponseStore } from './../models/store.model';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMeStores() {
    return this.http.get<ResponseStore>(`${this.apiUrl}/stores`, {
      context: checkToken(),
    });
  }
}
