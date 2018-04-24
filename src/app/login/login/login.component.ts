import {asNativeElements, Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../authorization/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    // both NgModels variables
      login = '';
      password = '';
      Failurelogin: boolean = false;
  constructor(private authservice: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
  }

  SendCredentials() {
    this.authservice.login(this.login, this.password)

    // u have to bind(this) to keep context of this in method Success and make router methos runable
      .then(this.Success.bind(this), this.Failure.bind(this));
  }

  private Success() {
    this.router.navigate(['/shop']);
  }
  private Failure() {
    this.Failurelogin = true;
    this.login = '';
    this.password = '';


  }

}
