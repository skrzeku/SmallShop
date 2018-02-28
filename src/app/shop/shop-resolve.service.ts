import {ShopService} from './shop.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Item} from './models/item';
import {Injectable} from '@angular/core';

@Injectable()
export class ShopResolve implements Resolve<Item> {
  constructor(private shoper: ShopService) {}


  // Resolve give you a chance to w8 for load contents of components, then show u a view. This is very good option to build bigger apps.
  // With Resolve u can delete all Elvis operators for example: ?
  resolve(route: ActivatedRouteSnapshot) {

    // operator params give u a abilities to get a parameters from Website Api for example:
    // http:// realmadrid.com/shop/15 here param mean 15 it can be called 'id' or something like that
  return this.shoper.getoneitem(route.params['id']);
}}



