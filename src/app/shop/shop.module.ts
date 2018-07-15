import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AmountItemsComponent } from './amount-items/amount-items.component';
import {RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {ShopResolve} from './shop-resolve.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import { FootComponent } from './navigation/foot/foot.component';
import { ProductsSectionComponent } from './products-section/products-section.component';
import {ShopRoutingModule} from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {SharedModule} from '../shared-module/shared-module.module';
import { DeadlineComponent } from './details/deadline/deadline.component';
import {MyfilterPipe} from '../shared-module/pipes/myfilter.pipe';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    SharedModule

  ],
  exports: [ProductsComponent],
                    //Every Dynamic components are entry Components!!
  entryComponents: [DeadlineComponent],
  declarations: [ProductsComponent, FootComponent, NavigationComponent
    , AmountItemsComponent, DetailsComponent, SearchComponent, ProductsSectionComponent, ShopComponent, DeadlineComponent],
  providers: [ ShopResolve, MyfilterPipe]
})
export class ShopModule { }
