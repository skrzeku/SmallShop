import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AsyncSubject} from 'rxjs/AsyncSubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class LayoutService {

  constructor() { }


  VisibleSubject$ = new BehaviorSubject<boolean>(null);


  EnableButton (): void {
    this.VisibleSubject$.next(true);
    console.log('Visible Subject returns:', this.VisibleSubject$);
  }

  DisableButtons (): void {
    this.VisibleSubject$.next(false);
    console.log('Visible Subject returns:', this.VisibleSubject$);
  }
}
