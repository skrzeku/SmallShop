import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class VoidService {
myvoid$ = new Subject<any>();
  constructor() { }
  ShareVoid(void1): void {
    this.myvoid$.next(void1);
  }

}
