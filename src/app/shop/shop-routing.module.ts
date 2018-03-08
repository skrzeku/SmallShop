import {Class, NgModule} from '@angular/core';
import {Resolve, Route, RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {ShopResolve} from './shop-resolve.service';




          // U need to add resolve to your Route, and register service in providers (shop.module.ts)

 const Shop_Routing: Route [] = [
  { path: 'shop/:id',
    resolve: { product: ShopResolve},
    component: <any>DetailsComponent},

 ]

@NgModule ({
  imports: [RouterModule.forChild(Shop_Routing)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
