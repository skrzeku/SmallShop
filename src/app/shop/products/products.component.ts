///<reference path="../../../../node_modules/@angular/forms/src/validators.d.ts"/>
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../models/product';
import {NavigationComponent} from '../navigation/navigation.component';
import {ShopService} from '../shop.service';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  amountProduct: number;
  amountlaptops: number;
  amountphones: number;
  amounttv: number;
  amountsoundbars: number;
  sumproducts: number;
  newproducts: number;
  usedProduct: number;
  damagedproduct: number;
  mapcost: number[];
  grossmaxprice: number;
  grossminprice: number;
  @ViewChild('showgrosschild') showgrosschild: NavigationComponent;
  myformgroup: FormGroup;

  products: Product[] = [];

                         // 3 Services in Constructor
  constructor(private shopservice: ShopService,
              private routerService: Router,
              private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.LoadProducts();
  }

                                   //My first form with validator
  BuildMyForm (): void {
    this.myformgroup = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      category: ['', Validators.required],
      color: ['', Validators.required],
      condition: ['', Validators.required],
      damaged: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(99999)]],
      delivery_cost: ['', [Validators.required, Validators.min(0)]]
    });
  }

  LoadProducts(): void {
this.shopservice.getshopProducts().subscribe((products) => {
  this.products = products;
  this.countproducts();
  this.countCategory();
  this.showcondition();
  this.mapcostproducts();
});
  }
                          // router.navigate can be replaced by directive [routerLink] in file.html
  DetailsNavigate(product) {
this.routerService.navigate(['/shop', product.id]);
  }

                        // ngAfterViewInit give u a chance to w8 for load component. Run late than ngOnInit.
  ngAfterViewInit() {

  }

  showvalue(sumproducts: number): void {
    this.sumproducts = sumproducts;

  }
  countproducts(): void {
    this.amountProduct = this.products
      .length;
  }
  countCategory (): void {
    const mapsos = this.products.map((product) => product.category);
    this.amountlaptops = mapsos.filter((loko) => loko === 'laptops').length;
    this.amountphones = mapsos.filter((losa) => losa === 'smartphones').length;
    this.amounttv = mapsos.filter((tv) => tv === 'tv').length;
    this.amountsoundbars = mapsos.filter((bars) => bars === 'soundbars').length;

// console.log just for validate
    console.log(this.amountphones);
    console.log(this.amountlaptops);
}
showcondition (): void {
    this.newproducts = this.products.map((product) => product.condition)
      .filter((sos) => sos === 'new')
      .length;
    this.usedProduct = this.products.map((product) => product.condition)
      .filter((product) => product === 'used')
      .length;
    this.damagedproduct = this.products.map((product) => product.damaged)
      .filter((product) => product === true)
      .length;
}
addnewproduct (): void {
  this.shopservice.AddShopProduct(this.myformgroup.value).subscribe(() => {
this.LoadProducts();
  });
}


mapcostproducts (): void {
    this.mapcost = this.products.map((product) => product.price);
}


}


