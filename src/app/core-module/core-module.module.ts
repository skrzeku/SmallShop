import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [NaviComponent],
  declarations: [NaviComponent]
})
export class CoreModule { }
