import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContactComponent } from './info-contact/info-contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InfoContactComponent],
  declarations: [InfoContactComponent]
})
export class ContactModule { }
