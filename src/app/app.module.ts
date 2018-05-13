import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShopModule} from './shop/shop.module';
import {ShopService} from './shop/shop.service';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core-module.module';
import {AppRoutingModule} from './app-routing.module';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {LoginModule} from './login/login.module';
import {AuthorizationService} from './authorization/authorization.service';
import {AuthorizationGuard} from './authorization/authorization.guard';
import {CanloadGuard} from './authorization/canload.guard';
import {LayoutService} from './shared-module/services/layout.service';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login/login-routing.module';
import {ShopRoutingModule} from './shop/shop-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    LoginModule,
    LoginRoutingModule
  ],
  providers: [ShopService, AuthorizationGuard, CanloadGuard, LayoutService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
