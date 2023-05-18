import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Item, Store } from '../models/store.model';
import { checkToken } from '../interceptors/token.interceptor';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getItemByName(name: string) { // Token
    return this.http.get<Item>(`${this.apiUrl}/item/${name}`, {
      context: checkToken(),
    });
  }

  createItem(name: Item['name'], payload: Item) {
    return this.http.post(`${this.apiUrl}/item/${name}`, payload);
  }

  updateItem(name: Item['name'], payload: Item) {
    return this.http.put(`${this.apiUrl}/item/${name}`, payload);
  }


}