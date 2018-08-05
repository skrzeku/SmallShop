import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization/authorization.service';
import {Router} from '@angular/router';
import {LayoutService} from '../shared-module/services/layout.service';
import {VoidService} from '../shop/void.service';
import {ShopService} from '../shop/shop.service';
import {Client} from '../shop/models/client';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{


  constructor(private authservice: AuthorizationService,
              private router: Router,
              private layservice: LayoutService,
              private voidserv: VoidService,
              private shopservice: ShopService,
              private formbuilder: FormBuilder) { }
  // both NgModels variables
  login: '';
  password: '';

  myformgroup: FormGroup;
  Failurelogin: boolean = false;
  client: Client;


ngOnInit() {
  this.authservice.GetUser();

  //this.voidserv.ShareVoid(this.SendValues());
  //this.layservice.VisibleSubject$.subscribe(value => { this.visible = value; });
}
  GetOneClient (): void {
    this.shopservice.getoneclient(1).subscribe((client) => this.client = client);
    console.log(this.client);
  }

LogAsGuest() {
  this.authservice.isLogged = true;
  this.router.navigate(['shop']);

}
  NaviRegister() {
  this.router.navigate(['register']);
  }


  SendValues() {
    this.authservice.login(this.login, this.password).then(this.Success.bind(this), this.Failure.bind(this));
  }
   Success() {
    this.router.navigate(['shop']).then(() => this.layservice.EnableButton());

  }
   Failure() {
    this.Failurelogin = true;
    console.log('failed');
  } }

