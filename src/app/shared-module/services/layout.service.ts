import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LayoutService {

  constructor() { }


  VisibleSubject$ = new Subject<boolean>();


  Show (): void {
    this.VisibleSubject$.next(true);
  }

  Hide (): void {
    this.VisibleSubject$.next(false);
  }
}
