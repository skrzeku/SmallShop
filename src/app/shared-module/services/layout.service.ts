import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class LayoutService {

  constructor() { }


  VisibleSubject$ = new BehaviorSubject<boolean>(null);


  EnableButton (): void {
    this.VisibleSubject$.next(true);
  }

  DisableButtons (): void {
    this.VisibleSubject$.next(false);
  }
}
