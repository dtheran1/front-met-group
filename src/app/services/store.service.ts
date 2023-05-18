import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  createStore(name: Store['name']) {
    return this.http.post<Store>(`${this.apiUrl}/store/${name}`, {});
  }

  getStore(name: Store['name']) {
    return this.http.get<Store>(`${this.apiUrl}/store/${name}`);
  }

  deleteStore(name: Store['name']) {
    return this.http.delete(`${this.apiUrl}/store/${name}`);
  }
}
