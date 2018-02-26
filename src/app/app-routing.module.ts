import {Class, NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ItemsComponent} from './shop/items/items.component';


const App_Routers: Route [] = [
  // Redirect!!
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'shop', component: <any>ItemsComponent}];

@NgModule ({
  imports: [RouterModule.forRoot(App_Routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
