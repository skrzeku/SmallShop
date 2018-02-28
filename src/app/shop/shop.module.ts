import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AmountItemsComponent } from './amount-items/amount-items.component';
import { SearchComponent } from './search/search.component';
import {SharedModule} from '../shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {ShareDetailsComponent} from '../shared-module/share-details/share-details.component';
import {ShopResolve} from './shop-resolve.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ItemsComponent, NavigationComponent, SearchComponent, DetailsComponent],
  providers: [ShopResolve],
  declarations: [ItemsComponent, NavigationComponent, AmountItemsComponent, SearchComponent, DetailsComponent]
})
export class ShopModule { }
