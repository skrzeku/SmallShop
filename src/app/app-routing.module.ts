import {Class, NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ProductsComponent} from './shop/products/products.component';
import {MainAboutComponent} from './about/main-about/main-about.component';
import {InfoContactComponent} from './contact/info-contact/info-contact.component';


const App_Routers: Route [] = [
  // redirectTo u need to use for redirects for example:
  // write http://www.realmadrid.com/ redirect to realmadrid.com/shop
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'shop', component: <any>ProductsComponent},
  {path: 'about', component: <any>MainAboutComponent},
  {path: 'contact', component: <any>InfoContactComponent}];

@NgModule ({
  // forRoot read a information from App_Routers and update this one. After this u can export updated Routermodule.
  imports: [RouterModule.forRoot(App_Routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
