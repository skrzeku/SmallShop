import {
  AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild,
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
import {error} from 'util';
import {getQueryValue} from '@angular/core/src/view/query';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {
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
  isHidden: boolean;
  laptops = [];
  myArray = [];
  longestvalue: number;
  visible: boolean = false;
  vis2: boolean = false;
  MostCondition: string;
  formsIsShown: boolean;
  private mysubscription: Subscription;
  MyNative: any;
  @ViewChild('showgrosschild') showgrosschild: NavigationComponent;
  @ViewChild('MySpan') MySpan: ElementRef;
  @ViewChildren(ProductsSectionComponent) ProductSession: QueryList<ProductsSectionComponent>;
  days: number;
  startdays: number;
  Full_Path_image: string;
  characters: string = '';

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

    //setTimeout(() => {
      //this.ShowMyOutput();
    //}, 100);




  }
  ngAfterContentInit() {
  }
  ngOnDestroy() {
    this.mysubscription.unsubscribe();
  }



                                   //My first form with validator
  BuildMyForm (): void {

    this.formsIsShown = true;
    this.myformgroup = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      category: ['', Validators.required],
      color: ['', Validators.required],
      condition: ['', Validators.required],
      damaged: '',
      price: ['', [Validators.required, Validators.min(0), Validators.max(99999)]],
      delivery_cost: ['', [Validators.required, Validators.min(0)]],
      start_date: new Date(),
      days: [''],
      finish_date: [''],
      image: [''],
      path_image: [''],
      description: ['', Validators.maxLength(550)]

    });
  }
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

  LoadProducts(): void {
    this.shopservice.getshopProducts().subscribe((products) => {
      this.products = products;
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
  DetailsNavigate(product) : void {
this.routerService.navigate(['/shop', product.id]);
  }

   ChangeMyStyleofSpan (): void {
      const MySuperSpan = this.MySpan.nativeElement;
  if (this.visible) {
   this.render.setProperty(MySuperSpan, 'disabled', false);
   console.log('Visible:', this.visible);
  }
 else if (!this.visible) this.render.setProperty(MySuperSpan, 'disabled', true);
  }

                        // ngAfterViewInit give u a chance to w8 for load component. Run late than ngOnInit. I have to edit!!!
  ngAfterViewInit() {








// i have to change it to make sort
this.ProductSession.changes.subscribe(() => {
  const lol = this.ProductSession.map((product) => product.product.category);
  lol.filter((cat) => cat === 'laptops').every(() => this.isHidden = true);
});
  }

  hidecomponents(): void {
this.laptops.forEach(() => {
  this.isHidden = true;
});
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

  const daysvalue = this.myformgroup.controls['days'].value;
  const mydatevalue = this.myformgroup.controls['start_date'].value;
  this.days = daysvalue * 1000 * 60 * 60 * 24;
  this.startdays = +mydatevalue;
  const image = this.myformgroup.controls['image'].value;
  this.Full_Path_image = '../../../assets/images/' + image + '.jpeg';

        //Void to Return false of Damaged when condition === new was Selected!
   this.ClearDamaged();

  this.myformgroup.controls['finish_date'].setValue(this.startdays + this.days);
  this.myformgroup.controls['path_image'].setValue(this.Full_Path_image);

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


