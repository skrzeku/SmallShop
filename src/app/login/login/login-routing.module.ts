import {Class, NgModule} from '@angular/core';
import {Resolve, Route, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';




          // U need to add resolve to your Route, and register service in providers (shop.module.ts)

 const Login_Routing: Route [] = [
  { path: 'login',
    component: <any>LoginComponent},

 ]

@NgModule ({
  imports: [RouterModule.forChild(Login_Routing)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
