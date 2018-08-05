import { Injectable } from '@angular/core';
import {LayoutService} from '../shared-module/services/layout.service';
import {VoidService} from '../shop/void.service';
import {ShopService} from '../shop/shop.service';
import {Client} from '../shop/models/client';



@Injectable()
export class AuthorizationService {

  constructor(private layoutservice: LayoutService,
              private voidserv: VoidService,
              private shopservice: ShopService) {}
  logins = [];
  clients: Client[] = [];
  client: Client;

  GetUser () {
    this.shopservice.GetClients().subscribe((clients) => {
      this.clients = clients;
      this.logins = this.clients.map((client) => client.login);
      console.log(this.clients);
    });
  }


  isLogged:boolean = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      const loginos = this.logins.filter((mylog) => mylog === login).length;

      if (loginos > 0) {
        this.client = this.clients.filter((client) => client['login'] === login)
          .reduce((client) => client);
       if (this.client.password === password) {
         this.isLogged = true;
         resolve();
       }
       reject();
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
