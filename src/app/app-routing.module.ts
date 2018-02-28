import {Class, NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ItemsComponent} from './shop/items/items.component';


const App_Routers: Route [] = [
  // redirectTo u need to use for redirects for example:
  // write http://www.realmadrid.com/ redirect to realmadrid.com/shop
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'shop', component: <any>ItemsComponent}];

@NgModule ({
  // forRoot read a information from App_Routers and update this one. After this u can export updated Routermodule.
  imports: [RouterModule.forRoot(App_Routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
