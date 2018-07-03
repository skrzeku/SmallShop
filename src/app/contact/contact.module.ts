import { NgModule } from '@angular/core';
import { InfoContactComponent } from './info-contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactRoutingModule} from './contact-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [InfoContactComponent],
  declarations: [InfoContactComponent]
})
export class ContactModule { }
