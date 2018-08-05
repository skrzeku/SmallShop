import { Injectable } from '@angular/core';
import {Product} from './models/product';
import {Observable} from 'rxjs/Observable';
import {Http, ResponseContentType, Response} from '@angular/http';
import 'rxjs';
import {formGroupNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Client} from './models/client';



@Injectable()
export class ShopService {
  private MyApiUrl = 'http://localhost:3000/api/shop';
  private MyClientUrl = 'http://localhost:3000/api/client';

  constructor(private http: Http) { }
                        // observable need to subscribe() in components

  getshopProducts(): Observable<Product[]> {
    return this.http.get(this.MyApiUrl)
      .map((res) => res.json());
  }
  GetClients (): Observable <Client[]> {
    return this.http.get(this.MyClientUrl)
      .map((res) => res.json());
  }
  getoneproduct(id: number): Observable<Product> {
                         // return this.http.get(`/${id}`)
    return this.http.get(this.MyApiUrl + `/${id}`)
      .map((res) => res.json());
  }
  getoneclient(id: number): Observable<Client> {
    return this.http.get(this.MyClientUrl + `/${id}`)
      .map((res) => res.json());
  }

  AddShopProduct(data): Observable<Product> {
    return this.http.post(this.MyApiUrl, data)
      .map((res) => res.json());
  }
  AddClient(data): Observable<Client> {
    return this.http.post(this.MyClientUrl, data)
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
  GetOneClient(id: number): Observable<Client> {
    return this.http.get(this.MyClientUrl + `/${id}`)
      .map((res) => res.json());
  }
  addformdetails (param: FormGroup): void {
    const daysvalue = param.controls['days'].value;
    const mydatevalue = +param.controls['start_date'].value;
    const finish_date = new Date(mydatevalue + (daysvalue * 60 * 60 * 24000));
    const image = param.controls['image'].value;
    const fullstringImage = '../../../assets/images/' + image + '.jpeg';


    param.controls['finish_date'].setValue(finish_date);
    param.controls['path_image'].setValue(fullstringImage);
  }

  MyVoid(par1, par2) {
    const myary = {
      name: [par2.name, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      category: [par2.category, Validators.required],
      color: [par2.color, Validators.required],
      condition: [par2.condition, Validators.required],
      damaged: [''],
      price: [par2.price, [Validators.required, Validators.min(0), Validators.max(99999)]],
      delivery_cost: [par2.delivery_cost, [Validators.required, Validators.min(0)]],
      start_date: new Date(),
      days: [''],
      finish_date: [''],
      image: [''],
      path_image: [par2.path_image],
      description: [par2.description, Validators.maxLength(550)],
      clientname: [par1.client.name, Validators.required],
      clientsurname: [par1.client.surname, Validators.required],
      clientcity: [par1.client.city, Validators.required],
      clientphone: [par1.client.phone, Validators.required],
      clientmail: [par1.client.mail, Validators.required]
    };

    return myary;
  }


}
