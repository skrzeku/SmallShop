
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
  Left_time: number;
  path_name: string = 'iphone7.jpeg';
  @ViewChild('myproductchild') myproductchild: ProductsComponent;
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
   // this.voidService.myvoid$.subscribe(myvoid => this.Loadmyproducts);
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

    const timeleft = +this.product.finish_date - +new Date();
    this.Left_time = Math.round(timeleft / (1000 * 60 * 60 * 24));

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
    this.myformgroup = this.formbuilder.group({
      name: [this.product.name, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      category: [this.product.category, Validators.required],
      color: [this.product.color, Validators.required],
      condition: [this.product.condition, Validators.required],
      damaged: [this.product.damaged, Validators.required],
      price: [this.product.price, [Validators.required, Validators.min(0), Validators.max(99999)]],
      delivery_cost: [this.product.delivery_cost, [Validators.required, Validators.min(0)]]
    });
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
