import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {VoidService} from '../shop/void.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [VoidService, FormBuilder]
})
export class LoginModule { }
