import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAboutComponent } from './main-about/main-about.component';
import {AboutRoutingModule} from './about-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [MainAboutComponent],
  declarations: [MainAboutComponent],
})
export class AboutModule { }
