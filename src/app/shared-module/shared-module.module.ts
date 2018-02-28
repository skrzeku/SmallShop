import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShareDetailsComponent } from './share-details/share-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, ShareDetailsComponent
  ],
  declarations: [HeaderComponent, ShareDetailsComponent]
})
export class SharedModule { }
