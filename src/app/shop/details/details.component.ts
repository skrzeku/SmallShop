
import {
  Component, ComponentFactoryResolver, ElementRef, Injectable, Input, OnInit, Renderer2, Type, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsComponent} from '../products/products.component';
import {VoidService} from '../void.service';
import {LayoutService} from '../../shared-module/services/layout.service';
import {DeadlineComponent} from './deadline/deadline.component';
import {getResponseURL} from '@angular/http/src/http_utils';
import {errorHandler} from '@angular/platform-browser/src/browser';
import {_throw} from 'rxjs/observable/throw';
import {errorComparator} from 'tslint/lib/verify/lintError';
import {catchError} from 'rxjs/operators';
import {errorObject} from 'rxjs/util/errorObject';
import {routerNgProbeToken} from '@angular/router/src/router_module';
import {Client} from '../models/client';
import {AuthorizationService} from '../../authorization/authorization.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent implements OnInit {
  product: Product;
  client: Client;
  footerString: string;
  myformgroup: FormGroup;
  Loadmyproducts: any;
  mydynamicoutput: number;
  visible: boolean = false;
  path_image: string;
  Left_time: string;
  path_name: string = 'iphone7.jpeg';
  characters: string = '';
  formsIsShown: boolean;
  mynumb: number = 0;
  myfil: any;
  @ViewChild('MyRefEdit') MyRefEdit: ElementRef;
  @ViewChild('MyRefDel') MyRefDel: ElementRef;
  products = [];
  myid: number;
  NextVisible: boolean = true;
  PrevVisible: boolean = true;
  //@ViewChild ('templateTime' , {read: ViewContainerRef}) templateTime: ViewContainerRef;

  constructor(private ShopServices: ShopService,
                              //ActivatedRoute give u RouterParams and snapshot
              private rt: ActivatedRoute,
              private routeService: Router,
              private shopservice: ShopService,
              private formbuilder: FormBuilder,
              private voidService: VoidService,
              private layserv: LayoutService,
              private rendered: Renderer2,
              private voidservice: VoidService,
              private auth: AuthorizationService) {
  }

  ngOnInit() {
    this.LoadOneProduct();
    this.make_string_footer();
    this.layserv.VisibleSubject$.subscribe(value => this.visible = value);
    this.MakeDisabled();
    //this.CreateDynamicDataComponent();
    this.checkMyPath();
    this.DateVoid();
    this.voidService.myproducts$.subscribe(value => this.products = value);
    this.CheckLast();
    this.CheckFirst();

  }

checkMyPath ()  {
    this.path_image = '../../../assets/images/' + this.path_name;
}
  CheckLength(event: string): void {
    this.characters = event;
  }
  CheckLast () {
    const mymap = this.products.map((products) => products.id);
    const maxmap = Math.max(...mymap);

    if (this.product.id === maxmap) {
      this.NextVisible = false;
    }
    else {
      this.NextVisible = true;
    }
  }
  CheckFirst (): void {
    const mymap = this.products.map((products) => products.id);
    const minmap = Math.min(...mymap);
    if (this.product.id === minmap) {
      this.PrevVisible = false;
    }
    else {
      this.PrevVisible = true;
    }
}

                    //Dynamic Component by Component Factory Resolver dont need Right Now!
  /*
  CreateDynamicDataComponent () {
    if (this.templateTime.get(0) !== null) {
      return;
    }
    const myfactory = this.componentfactoryresolve
      .resolveComponentFactory(<Type <DeadlineComponent>> DeadlineComponent);
    const templateRef = this.templateTime.createComponent(myfactory);

        //componentRef allow to instance, so every field of class and add referneco to every method
    templateRef.instance.product = this.product;
    templateRef.instance.equalDate.subscribe((val) => {
      this.mydynamicoutput = val;
    });
  } */

  DateVoid () {


    setInterval(() => {
      const currentdate = +new Date();
      const leftdate = new Date(this.product.finish_date);
      const leftmytime = new Date(+leftdate - currentdate);

      const days = Math.floor(+leftmytime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(+leftmytime / (1000 * 60 * 60) % 24);
      const minutes = Math.floor(+leftmytime / (1000 * 60) % 60);
      const secounds = Math.floor(+leftmytime / (1000) % 60);

      this.Left_time = days + 'days' + ',' + hours + ':' + minutes + ':' + secounds;
    }, 1000);


  }

MakeDisabled (): void {
  const myref = this.MyRefEdit.nativeElement;
  const my2ref = this.MyRefDel.nativeElement;
    if (this.visible) {
      this.rendered.setProperty(myref, 'disabled', false);
      this.rendered.setProperty(my2ref, 'disabled', false);
    }
    else {
      this.rendered.setProperty(myref, 'disabled', true);
      this.rendered.setProperty(my2ref, 'disabled', true);
    }
}

  // void to show a footer text
  make_string_footer(): void {
    this.footerString = 'Przedmiotu tego nie można kupić, stanowi on jedynie element projektu tej aplikacji. Aplikacja ta nie ma na celu naruszenia praw autorskich, jak również nie jest reklamą danego produktu. Produkt ten został wybrany w sposób przypadkowy. Wszystkie informacje o produkcie zostały pobrane w legalny sposób ze źródeł udostępnionych przez producenta.';
  }
                      // coppied from products.component
  BuildMyForm (): void {
    this.formsIsShown = true;
    this.myformgroup = this.formbuilder.group(this.shopservice.MyVoid(this.auth, this.product));
  }

  LoadOneProduct(): void {
                                  /* OLD Version, but very slowly!!!
                            // +convert string to number
                            const id = +this.rt.snapshot.params['id'];

                            this.ShopServices.getoneproduct(id).subscribe((product) => {
                              this.product = product;
                            }); */
                          // new faster version!!
                          // data give u abilities to read a property 'product' from shop-routing.module.ts (resolve)

    this.product = this.rt.snapshot.data['product'];
  }


  StartNavigte (param: number) {
    this.routeService.navigate(['/shop', (this.product.id + param)]);
    this.LoadOLdProduct(param);
  }

    CheckforLoop (par1: number, par2: any): void {
    const mymap = this.products.map((products) => products.id);
    let myid = par1;

      this.myfil = mymap.filter(value => value === (this.product.id + myid))
        .length;

      if (this.myfil !== 0) {
        this.StartNavigte(myid);
      }
      else if (this.myfil === 0) {
        myid = par1;
        do {
          if (par2 === '++') {
            myid ++;
          }
          else if (par2 === '--') {
            myid --;
          }

          this.myfil = mymap.filter(value => value === (myid + this.product.id)).length;
        }
        while (this.myfil === 0) {
            this.StartNavigte(myid);
        }
      }

   }



  ShowNextProduct(product: Product) {
    this.CheckforLoop(1, '++' );

  }

  ShowPrevProduct(product: Product) {
    this.CheckforLoop(-1, '--' );
  }

  LoadOLdProduct(number: any): void {
    const id = +this.rt.snapshot.params['id'];

    this.ShopServices.getoneproduct(id + number).subscribe((product) => {
      this.product = product;
        this.CheckLast();
        this.CheckFirst();
    }
     );
  }

                        // After click update go to '/shop' by using service: Router.navigate

  EditProduct (): void {
    this.formsIsShown = false;
    this.shopservice.addformdetails(this.myformgroup);

    this.shopservice.Editproduct(this.product.id, this.myformgroup.value).subscribe(() => {
      this.routeService.navigate(['/shop']);
    });
  }
  DeleteProduct (): void {
    this.shopservice.Deleteproduct(this.product.id).subscribe(() => {
      //event.stopPropagation(); -- when u have 2 or more clicks very close, this command give u a abbilities to focus on mainly click!
      this.routeService.navigate(['/shop']);



    });
  }

}
