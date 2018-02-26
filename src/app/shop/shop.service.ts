import { Injectable } from '@angular/core';
import {Item} from './models/item';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class ShopService {
  private MyApiUrl = 'http://localhost:3000/api/shop';

  constructor(private http: Http) { }

  getshopItems(): Observable<Item[]> {
    return this.http.get(this.MyApiUrl)
      .map((res) => res.json());
  }
}
