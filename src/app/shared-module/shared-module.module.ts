import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShareDetailsComponent } from './share-details/share-details.component';
import { MydirectiveDirective } from './directives/mydirective.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, ShareDetailsComponent, MydirectiveDirective
  ],
  declarations: [HeaderComponent, ShareDetailsComponent, MydirectiveDirective]
})
export class SharedModule { }
