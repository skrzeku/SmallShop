import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AmountItemsComponent } from './amount-items/amount-items.component';
import { SearchComponent } from './search/search.component';
import {SharedModule} from '../shared-module/shared-module.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ItemsComponent, NavigationComponent, SearchComponent],
  declarations: [ItemsComponent, NavigationComponent, AmountItemsComponent, SearchComponent]
})
export class ShopModule { }
