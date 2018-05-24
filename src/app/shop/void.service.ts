import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class VoidService {
  MyBoolean$ = new Subject<boolean>();
myvoid$ = new Subject<any>();
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

}
