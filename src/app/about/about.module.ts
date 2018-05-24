import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAboutComponent } from './main-about/main-about.component';
import {SharedModule} from '../shared-module/shared-module.module';
import {LayoutService} from '../shared-module/services/layout.service';
import {LoginModule} from '../login/login.module';
import {AuthorizationService} from '../authorization/authorization.service';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MainAboutComponent],
  declarations: [MainAboutComponent],
})
export class AboutModule { }
