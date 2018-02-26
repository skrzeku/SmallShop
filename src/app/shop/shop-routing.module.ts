import {Class, NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';


const Shop_Routing: Route [] = [
 // [{ path: 'shop/:id', component: <any>ItemsDetail}]
]

@NgModule ({
  imports: [RouterModule.forChild(Shop_Routing)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
