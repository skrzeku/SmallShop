import {Class, NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule, Routes} from '@angular/router';
import {CanloadGuard} from './authorization/canload.guard';
import {MainAboutComponent} from './about/main-about/main-about.component';
import {PageNotFoundComponent} from './shared-module/page-not-found/page-not-found.component';
import {InfoContactComponent} from './contact/info-contact.component';




const APP_ROUTES : Routes = [
      {path: '', pathMatch: 'full', redirectTo: 'shop'},
              //The Most important!! Delete ShopModule from app.module!!!
  {path: 'shop', canLoad: [CanloadGuard], loadChildren: 'app/shop/shop.module#ShopModule'},
  {path: 'about' , canLoad: [CanloadGuard], loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'contact', canLoad: [CanloadGuard], loadChildren: 'app/contact/contact.module#ContactModule'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule ({
  // forRoot read a information from App_Routers and update this one. After this u can export updated Routermodule.
  imports: [RouterModule.forRoot(APP_ROUTES, {

    //only for development mode/ it show u all events on console logs
    //enableTracing: true
    //preloadingStrategy: PreloadAllModules
  })]

  ,
  exports: [RouterModule],
})
export class AppRoutingModule {}
