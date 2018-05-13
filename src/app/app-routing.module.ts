import {Class, NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule, Routes} from '@angular/router';
import {CanloadGuard} from './authorization/canload.guard';
import {MainAboutComponent} from './about/main-about/main-about.component';


const APP_ROUTES : Routes = [
      {path: '', pathMatch: 'full', redirectTo: 'about'},
              //The Most important!! Delete ShopModule from app.module!!!
  {path: 'shop', canLoad: [CanloadGuard], loadChildren: 'app/shop/shop.module#ShopModule'},
      {path: 'about' , component: <any>MainAboutComponent}

];

@NgModule ({
  // forRoot read a information from App_Routers and update this one. After this u can export updated Routermodule.
  imports: [RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
