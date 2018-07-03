import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainAboutComponent} from './main-about/main-about.component';


const About_Routing: Routes = [
  {
    path: '',
    component: <any>MainAboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(About_Routing)
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
