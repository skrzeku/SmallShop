import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {LayoutService} from '../shared-module/services/layout.service';


@Injectable()
export class AuthorizationService {

  constructor(private layoutservice: LayoutService) {}
  // just for test
  private credentials = {
    login: 'admin',
    password:  'admin'
  };

  private isLogged = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (this.credentials.login === login && this.credentials.password === password) {
        this.layoutservice.Show();
        this.isLogged = true;
        resolve();
      } else {
        reject();
      }
    });
  }


          // Encapsulation method, it's like a good practice
  isLoggedVoid(): boolean {
    return this.isLogged;
  }
  logout (): void {
    this.isLogged = false;
    this.layoutservice.Hide();

  }



}
