import { NgModule } from '@angular/core';
import {Route, Router, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthorizationGuard} from '../authorization/authorization.guard';
import {AuthorizationService} from '../authorization/authorization.service';




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
  providers: [AuthorizationService]
})
export class LoginRoutingModule { }
