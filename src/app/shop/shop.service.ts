import { Injectable } from '@angular/core';
import {Product} from './models/product';
import {Observable} from 'rxjs/Observable';
import {Http, ResponseContentType, Response} from '@angular/http';
import 'rxjs';
import {formGroupNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



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
  addformdetails (param: FormGroup): void {
    const daysvalue = param.controls['days'].value;
    const mydatevalue = +param.controls['start_date'].value;
    //this.days = daysvalue * 1000 * 60 * 60 * 24;
    //this.startdays = +mydatevalue;
    const finish_date = new Date(mydatevalue + (daysvalue * 60 * 60 * 24000));
    const image = param.controls['image'].value;
    const fullstringImage = '../../../assets/images/' + image + '.jpeg';

    //Void to Return false of Damaged when condition === new was Selected!

    param.controls['finish_date'].setValue(finish_date);
    param.controls['path_image'].setValue(fullstringImage);
  }

  MyVoid(par2) {
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
      description: [par2.description, Validators.maxLength(550)]
    };

    return myary;
  }


}
