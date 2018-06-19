import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShareDetailsComponent } from './share-details/share-details.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import {Filter} from './models/Filter';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, ShareDetailsComponent, MydirectiveDirective, PageNotFoundComponent, MyfilterPipe
  ],
  declarations: [HeaderComponent, ShareDetailsComponent, MydirectiveDirective, PageNotFoundComponent, MyfilterPipe]
})
export class SharedModule {
}
