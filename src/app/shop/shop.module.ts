import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AmountItemsComponent } from './amount-items/amount-items.component';
import {MaterialModule} from '../material/material.module';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ItemsComponent, NavigationComponent, NavbarComponent, SearchComponent],
  declarations: [ItemsComponent, NavigationComponent, AmountItemsComponent, SearchComponent, NavbarComponent]
})
export class ShopModule { }
