import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../authorization/authorization.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.less']
})
export class NaviComponent implements OnInit {
  clock:string = '000000';
  clocki:string = '';

  constructor(private myservice: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    let timeoutId = setInterval(() => {
      let time = new Date();
      this.clock = ('0'+time.getHours()).substr(-2) + ('0'+time.getMinutes()).substr(-2) + ('0'+time.getSeconds()).substr(-2);
    }, 1000);
    this.getTime();
  }
  MyLogOut (): void {
    this.myservice.logout();
    this.router.navigate(['login']);
  }
                            //Another My Way to build Timer

    getTime(): void {
    /*
    let myinterval = setInterval(() => {
      let CurrentDate = new Date();
      let hours = CurrentDate.getHours().toString();
      let minutes = CurrentDate.getMinutes().toString();
      let sec = CurrentDate.getSeconds().toString();
      this.clocki = hours + ':' + minutes + ':' + sec;
    }, 1000); */
  }

}
