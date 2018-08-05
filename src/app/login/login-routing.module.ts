import { NgModule } from '@angular/core';
import {Route, Router, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {RegisterComponent} from '../register/register.component';

const LoginRouter: Route [] = [{
  path: 'login',
  component: <any> LoginComponent
},
  {
    path: 'register',
    component: <any> RegisterComponent
  }];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRouter)
  ],
  exports: [
    RouterModule
  ],
})
export class LoginRoutingModule { }
