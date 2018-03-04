import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAboutComponent } from './main-about/main-about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MainAboutComponent],
  declarations: [MainAboutComponent]
})
export class AboutModule { }
