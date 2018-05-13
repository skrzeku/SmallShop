import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {


  constructor(private authservice: AuthorizationService,
              private router: Router) { }
  // both NgModels variables
  login: '';
  password: '';
  Failurelogin: boolean = false;


  SendValues() {
    this.authservice.login(this.login, this.password).then(this.Success.bind(this), this.Failure.bind(this));
  }
  private Success() {
    this.router.navigate(['shop']);
  }
  private Failure() {
    this.Failurelogin = true;
    console.log('failed');
  } }

