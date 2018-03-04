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
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ItemsComponent, NavigationComponent, DetailsComponent],
  providers: [ShopResolve],
  declarations: [ItemsComponent, NavigationComponent, AmountItemsComponent, DetailsComponent]
})
export class ShopModule { }
