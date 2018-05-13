import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthorizationService} from './authorization.service';


@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {


  constructor(private authorizationservice: AuthorizationService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> |Promise<boolean> | boolean {
  return this.authorizationservice.isLoggedVoid();


}
canActivateChild(Childroute: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot
                 ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authorizationservice.isLoggedVoid()) {
      return true;
    }
      this.router.navigate(['/login']);
      return false;
}

}

