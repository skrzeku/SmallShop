import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {async} from 'rxjs/scheduler/async';

@Injectable()
export class FootserviceService {
  Footvalue$ = new Subject<number>();


  sharevalue (value: number): void {
    this.Footvalue$.next(value);
    console.log(value);
  }

}
