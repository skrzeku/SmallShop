
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

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent implements OnInit {
  product: Product;
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
  @ViewChild('MyRefEdit') MyRefEdit: ElementRef;
  @ViewChild('MyRefDel') MyRefDel: ElementRef;
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
              private componentfactoryresolve: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.LoadOneProduct();
    this.make_string_footer();
    this.layserv.VisibleSubject$.subscribe(value => this.visible = value);
    this.MakeDisabled();
    //this.CreateDynamicDataComponent();
    this.checkMyPath();
    this.DateVoid();
  }

checkMyPath ()  {
    this.path_image = '../../../assets/images/' + this.path_name;
}
  CheckLength(event: string): void {
    this.characters = event;
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

      console.log(Math.round((+leftmytime) / (1000 * 60 * 60 * 24)));

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
    this.myformgroup = this.formbuilder.group(this.shopservice.MyVoid(this.product));
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
  ShowNextProduct(product: Product) {
    this.routeService.navigate(['/shop', this.product.id + 1]);
    this.LoadOLdProduct();
  }

  ShowPrevProduct(product: Product) {
    this.routeService.navigate(['/shop', this.product.id - 1]);
    this.LoadOLdProduct();
  }

  LoadOLdProduct(): void {
    const id = +this.rt.snapshot.params['id'];

    this.ShopServices.getoneproduct(id).subscribe((product) => {
      this.product = product;
    });
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
