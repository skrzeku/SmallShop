import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class CanloadGuard implements CanLoad {
  constructor(private authService: AuthorizationService, private router: Router) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {


      if (!this.authService.isLoggedVoid()) {
        this.router.navigate(['/login'])
        return false;
      }

      return true;

  }
}
