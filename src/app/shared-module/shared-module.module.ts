import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShareDetailsComponent } from './share-details/share-details.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LayoutService} from './services/layout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, ShareDetailsComponent, MydirectiveDirective, PageNotFoundComponent
  ],
  declarations: [HeaderComponent, ShareDetailsComponent, MydirectiveDirective, PageNotFoundComponent]
})
export class SharedModule {
}
