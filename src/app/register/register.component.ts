import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopService} from '../shop/shop.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../authorization/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {


  myform: FormGroup;
  Failurelogin: boolean = false;

  constructor(private formbuilder: FormBuilder,
              private shopservice: ShopService,
              private router: Router,
              private authserv: AuthorizationService) { }

  ngOnInit () {
    this.BuildRegisterForm();
  }

  BuildRegisterForm () {
    this.myform = this.formbuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      login: ['', [Validators.required, Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  Reset () {
    this.Failurelogin = false;
    this.myform.reset();
  }
  AddUser () {
    const myclient = this.authserv.clients;
    const currentlogin = this.myform.get('login').value;

    if (!myclient.filter((user) => user['login'] === currentlogin)) {
      this.Failurelogin = false;
      this.shopservice.AddClient(this.myform.value).subscribe(() => {
        this.router.navigate(['login']);
      });
    }
    else {
      this.Failurelogin = true;
    }
  }

}
