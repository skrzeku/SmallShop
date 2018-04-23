import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FootserviceService {
  Footvalue$ = new Subject<string>();


  sharevalue (value: string): void {
    this.Footvalue$.next(value);
    console.log(value);
  }

}
