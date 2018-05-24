import {Class, NgModule} from '@angular/core';
import {CanActivate, CanLoad, Resolve, Route, RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ShopComponent} from './shop.component';
import {DetailsComponent} from './details/details.component';
import {ShopResolve} from './shop-resolve.service';
import {AuthorizationService} from '../authorization/authorization.service';
import {LayoutService} from '../shared-module/services/layout.service';






          // U need to add resolve to your Route, and register service in providers (shop.module.ts)

 const Shop_Routing: Routes = [
   {path: '',
     component: <any>ShopComponent,
   children: [{
     path: '',
     component: <any>ProductsComponent
   },
     {
       path: ':id',
       component: DetailsComponent,
       resolve: {product: ShopResolve}
     }
   ]}
   ];

@NgModule ({
  imports: [RouterModule.forChild(Shop_Routing)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
