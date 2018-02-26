import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShopModule} from './shop/shop.module';
import {ShopService} from './shop/shop.service';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core-module.module';
import {AppRoutingModule} from './app-routing.module';
import {ShopRoutingModule} from './shop/shop-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    ShopRoutingModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
