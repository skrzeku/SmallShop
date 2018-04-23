import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AmountItemsComponent } from './amount-items/amount-items.component';
import {SharedModule} from '../shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {ShopResolve} from './shop-resolve.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MdTooltip, MdTooltipModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {SearchComponent} from './search/search.component';
import { FootComponent } from './navigation/foot/foot.component';
import {FootserviceService} from './footservice.service';
import { ProductsSectionComponent } from './products-section/products-section.component';
import {VoidService} from './void.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    /// comment forRoot() need to change!
    //NgbModule.forRoot()
    BrowserModule,
  ],
  exports: [ProductsComponent, NavigationComponent, DetailsComponent],
  providers: [ShopResolve, FootserviceService, VoidService],
  declarations: [ProductsComponent, FootComponent, NavigationComponent, AmountItemsComponent, DetailsComponent, SearchComponent, ProductsSectionComponent]
})
export class ShopModule { }
