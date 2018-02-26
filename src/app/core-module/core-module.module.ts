import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NaviComponent],
  declarations: [NaviComponent]
})
export class CoreModule { }
