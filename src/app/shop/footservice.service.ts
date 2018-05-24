import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FootserviceService {
  Footvalue$ = new BehaviorSubject<string>(null);


  sharevalue (value: string): void {
    this.Footvalue$.next(value);
    console.log(value);
  }

}
