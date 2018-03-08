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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    /// comment forRoot() need to change!
    NgbModule.forRoot()
  ],
  exports: [ProductsComponent, NavigationComponent, DetailsComponent],
  providers: [ShopResolve],
  declarations: [ProductsComponent, NavigationComponent, AmountItemsComponent, DetailsComponent]
})
export class ShopModule { }
