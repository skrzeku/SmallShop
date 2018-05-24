import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContactComponent } from './info-contact.component';
import {SharedModule} from '../shared-module/shared-module.module';
import {AuthorizationService} from '../authorization/authorization.service';
import {LayoutService} from '../shared-module/services/layout.service';
import {LoginModule} from '../login/login.module';
import {BrowserModule} from '@angular/platform-browser';
import {ShopModule} from '../shop/shop.module';

@NgModule({
  imports: [
    BrowserModule,
  ],
  exports: [InfoContactComponent],
  declarations: [InfoContactComponent],
  providers: []
})
export class ContactModule { }
