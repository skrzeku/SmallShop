import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class VoidService {
  MyBoolean$ = new Subject<boolean>();
myvoid$ = new Subject<any>();
  myproducts$ = new BehaviorSubject<any>(null);

  constructor() { }
  ShareVoid(void1): void {
    this.myvoid$.next(void1);
  }




  EnableButton (): void {
    this.MyBoolean$.next(true);
    console.log('Visible Subject returns:', this.MyBoolean$);
  }

  DisableButtons (): void {
    this.MyBoolean$.next(false);
    console.log('Visible Subject returns:', this.MyBoolean$);
  }
  ShareProducts (products): void {
    this.myproducts$.next(products);
    console.log(products);
  }

}
