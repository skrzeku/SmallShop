import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {


  // just for test
  private credentials = {
    login: 'pawel',
    password:  'admin'
  };

  private isLogged = false;

  login (login, password) {


          // Promise is a async method and return resolve when inputed datas are correctly and reject when u enter wrong passwords or login
    return new Promise((resolve, reject) =>  {
      if (login === this.credentials.login && password === this.credentials.password) {
        resolve();
        this.isLogged = true;
      }
      else {
        reject();
      }

    });
  }
          // Encapsulation method, it's like a good practice
  isLoggedVoid() {
    return this.isLogged;
  }
  constructor() { }

}
