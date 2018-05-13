import { Injectable } from '@angular/core';
import {Product} from './models/product';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class ShopService {
  private MyApiUrl = 'http://localhost:3000/api/shop';

  constructor(private http: Http) { }
                        // observable need to subscribe() in components

  getshopProducts(): Observable<Product[]> {
    return this.http.get(this.MyApiUrl)
      .map((res) => res.json());
  }
  getoneproduct(id: number): Observable<Product> {
                         // return this.http.get(`/${id}`)
    return this.http.get(this.MyApiUrl + `/${id}`)
      .map((res) => res.json());
  }
  AddShopProduct(data): Observable<Product> {
    return this.http.post(this.MyApiUrl, data)
      .map((res) => res.json());
  }
  Editproduct(id: number, data): Observable<Product> {
    return this.http.put(this.MyApiUrl + `/${id}`, data)
      .map((res) => res.json());
  }
  Deleteproduct(id: number): Observable<Product> {
    return this.http.delete(this.MyApiUrl + `/${id}`)
      .map((res) => res.json());
  }

}
