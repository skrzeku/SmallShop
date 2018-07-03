import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoContactComponent} from './info-contact.component';


const Contact_Routing: Routes = [
  {path: '',
  component: <any>InfoContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(Contact_Routing)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
