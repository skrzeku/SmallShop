import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShopModule} from './shop/shop.module';
import {ShopService} from './shop/shop.service';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core-module.module';
import {AppRoutingModule} from './app-routing.module';
import {ShopRoutingModule} from './shop/shop-routing.module';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {LoginRoutingModule} from './login/login/login-routing.module';
import {LoginModule} from './login/login.module';
import {AuthorizationService} from './authorization/authorization.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    HttpModule,
    LoginModule,
    CoreModule,
    LoginRoutingModule,
    AppRoutingModule,
    ShopRoutingModule,
    AboutModule,
    ContactModule
  ],
  providers: [ShopService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
