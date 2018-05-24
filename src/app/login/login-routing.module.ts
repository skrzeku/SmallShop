import { NgModule } from '@angular/core';
import {Route, Router, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

const LoginRouter: Route [] = [{
  path: 'login',
  component: <any> LoginComponent
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
