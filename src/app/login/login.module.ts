import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthorizationService} from '../authorization/authorization.service';
import {ShopRoutingModule} from '../shop/shop-routing.module';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthorizationService]
})
export class LoginModule { }
