import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization/authorization.service';
import {Router} from '@angular/router';
import {LayoutService} from '../shared-module/services/layout.service';
import {VoidService} from '../shop/void.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{


  constructor(private authservice: AuthorizationService,
              private router: Router,
              private layservice: LayoutService,
              private voidserv: VoidService) { }
  // both NgModels variables
  login: '';
  password: '';
  Failurelogin: boolean = false;
  visible: boolean = false;


ngOnInit() {
  //this.voidserv.ShareVoid(this.SendValues());
  //this.layservice.VisibleSubject$.subscribe(value => { this.visible = value; });
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

