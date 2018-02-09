
import { NgModule } from '@angular/core';
import {
  MdButton, MdButtonBase, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCommonModule, MdCoreModule, MdIconModule, MdListItem,
  MdListModule,
  MdMenuItem,
  MdMenuModule, MdNavListCssMatStyler, MdOptionModule, MdSidenavContainer, MdSidenavModule, MdTabBody, MdTabNav, MdTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from '../shop/navbar/navbar.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCommonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCoreModule,
    MdTabsModule,
    MdListModule,
    MdSidenavModule,
    MdOptionModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCommonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCoreModule,
    MdTabsModule,
    MdListModule,
    MdSidenavModule,
    MdOptionModule
  ]
})
export class MaterialModule {}
