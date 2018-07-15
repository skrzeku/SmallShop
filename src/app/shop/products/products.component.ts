import {
  AfterContentInit, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Product} from '../models/product';
import {NavigationComponent} from '../navigation/navigation.component';
import {ShopService} from '../shop.service';
import {Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FootserviceService} from '../footservice.service';
import {ProductsSectionComponent} from '../products-section/products-section.component';
import {VoidService} from '../void.service';
import {LayoutService} from '../../shared-module/services/layout.service';
import {Subscription} from 'rxjs/Subscription';
import {Filter} from '../../shared-module/models/Filter';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
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
  laptops = [];
  myArray = [];
  longestvalue: number;
  visible: boolean = false;
  MostCondition: string;
  formsIsShown: boolean;
  private mysubscription: Subscription;
  @ViewChild('showgrosschild') showgrosschild: NavigationComponent;
  @ViewChild('MySpan') MySpan: ElementRef;
  @ViewChildren(ProductsSectionComponent) ProductSession: QueryList<ProductsSectionComponent>;
  days: number;
  startdays: number;
  Full_Path_image: string;
  characters: string = '';
  checkedboolean: boolean = false;
  filters: Filter[] = [];


  myformgroup: FormGroup;

  products: Product[] = [];

                         // 3 Services in Constructor
  constructor(private shopservice: ShopService,
              private lay: LayoutService,
              private routerService: Router,
              private formbuilder: FormBuilder,
              private footserviceService: FootserviceService,
              private voidService: VoidService,
              private render: Renderer2) { }

  ngOnInit() {

    this.LoadProducts();


    this.mysubscription = this.lay.VisibleSubject$.subscribe((val) => {
      if (val) {
        this.visible = val;
        console.log(val);
      }
      else if (!val) {
        console.log('error');
      }
    });


setTimeout(() => {
  this.ChangeMyStyleofSpan();
}, 50);

  }
  ngOnDestroy() {
    this.mysubscription.unsubscribe();
  }

            //Another Version of filters!
  /*
  LoadFilterProducts (name: string, value: any, value2: any, pricemin: number, pricemax: number) {

    if (!this.checkedboolean) {
      this.FilterProducts = this.products;
    }
    else if (this.checkedboolean) {
      this.FilterProducts = this.products.filter((lol) => lol[name] === value || value2)
        .filter((priceitem) => priceitem['price'] >= pricemin && priceitem['price'] <= pricemax );
    }

  }

*/



                                   //My first form with validator
  BuildMyForm (): void {

    this.formsIsShown = true;
    this.myformgroup = this.formbuilder.group(this.shopservice.MyVoid(''));
  }

  //No needed right now!
  /*
  ChangeValidators (): void {
    const checkdamage = this.myformgroup.get('damaged');
    const checkcondition = this.myformgroup.get('condition');

    if (checkdamage.value) {
      checkcondition.clearValidators();
    }
    else {
      checkcondition.setValidators([Validators.required]);
    }
    checkcondition.updateValueAndValidity();
  }
  */

  CheckLength(event: string): void {
    this.characters = event;
  }


  showvalue(sumproducts: number): void {
    this.sumproducts = sumproducts;
    console.log('Sumvalue: ', this.sumproducts);
  }


  ClearDamaged () {

    const conditionvalue = this.myformgroup.controls['condition'].value;
    if (conditionvalue === 'new') {
      this.myformgroup.controls['damaged'].setValue(false);
    }
    else return;
  }


            //Run when output will be emit!! Important dependecies

  showoutput(value: boolean): void {

    if (value) {
      this.filters = this.showgrosschild.myArray;
    }
    else if (!value) {
      this.checkedboolean = false;
    }

    //Variables getting from Navigaion Component
    /*
          if (maxprice  === undefined) {
            this.LoadFilterProducts(filterName, filterValue, filterValue2, this.showgrosschild.minprice, this.showgrosschild.maxprice );
          }

          else {
            this.LoadFilterProducts(filterName, filterValue, filterValue2, minprice, maxprice );
          } */
  }

  LoadProducts(): void {
    this.shopservice.getshopProducts().subscribe((products) => {
      this.products = products;
      //this.LoadFilterProducts('', '', '', null, null );
      this.countproducts();
      this.countCategory();
      this.showcondition();
      this.footserviceService.sharevalue(this.MostCondition);
      this.mapcostproducts();

      setTimeout(() => {
        if (this.showgrosschild) {
          this.showgrosschild.check_summary();
        }
        else if (!this.showgrosschild) {
          console.log('error!');
        }
      }, 20);
    });
  }


                          // router.navigate can be replaced by directive [routerLink] in file.html
  DetailsNavigate(product): void {
this.routerService.navigate(['/shop', product.id]);
  }


                        //Change style of html element by using ElementRef and renderer2
   ChangeMyStyleofSpan (): void {
      const MySuperSpan = this.MySpan.nativeElement;
  if (this.visible) {
   this.render.setProperty(MySuperSpan, 'disabled', false);
   console.log('Visible:', this.visible);
  }
 else if (!this.visible) this.render.setProperty(MySuperSpan, 'disabled', true);
  }

                        // ngAfterViewInit give u a chance to w8 for load component. Run late than ngOnInit. I have to edit!!!
  ngAfterViewInit() {}


  countproducts(): void {
    this.amountProduct = this.products
      .length;
  }

  countCategory (): void {
    const mapsos = this.products.map((product) => product.category);
    this.amountlaptops = mapsos.filter((loko) => loko === 'laptops').length;
    this.amountphones = mapsos.filter((losa) => losa === 'smartphones').length;
    this.amounttv = mapsos.filter((tv) => tv === 'Tv').length;
    this.amountsoundbars = mapsos.filter((bars) => bars === 'soundbars').length;
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
    this.myArray = [this.newproducts, this.usedProduct, this.damagedproduct];

  //1st Way
  this.longestvalue = this.myArray.reduce((prev, next) => {
    return (next > prev) ? next : prev; }, 0);

  if (this.longestvalue === this.newproducts) {
    this.MostCondition = 'New';
  }
  if (this.longestvalue === this.usedProduct) {
    this.MostCondition = 'Used';
  }
  if (this.longestvalue === this.damagedproduct) {
    this.MostCondition = 'Damaged';
  }
}


addnewproduct (): void {
  this.shopservice.addformdetails(this.myformgroup);


  this.shopservice.AddShopProduct(this.myformgroup.value).subscribe(() => {
this.formsIsShown = false;
this.myformgroup.reset();
    this.LoadProducts();
  });
}


mapcostproducts (): void {
    this.mapcost = this.products.map((product) => product.price);
}


}


