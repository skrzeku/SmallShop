import { Injectable } from '@angular/core';
import {LayoutService} from '../shared-module/services/layout.service';
import {VoidService} from '../shop/void.service';



@Injectable()
export class AuthorizationService {

  constructor(private layoutservice: LayoutService,
              private voidserv: VoidService) {}
  // just for test
  private credentials = {
    login: 'admin',
    password:  'admin'
  };

  private isLogged = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (this.credentials.login === login && this.credentials.password === password) {
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
              //It Works, but this is not a good practice

    location.reload();
    this.isLogged = false;
    this.layoutservice.DisableButtons();


  }



}
