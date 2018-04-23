
import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsComponent} from '../products/products.component';
import {VoidService} from '../void.service';

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
  @ViewChild('myproductchild') myproductchild: ProductsComponent;


  constructor(private ShopServices: ShopService,
                              //ActivatedRoute give u RouterParams and snapshot
              private rt: ActivatedRoute,
              private routeService: Router,
              private shopservice: ShopService,
              private formbuilder: FormBuilder,
              private voidService: VoidService) {
  }

  ngOnInit() {
   // this.voidService.myvoid$.subscribe(myvoid => this.Loadmyproducts);
    this.LoadOneProduct();
    this.make_string_footer();
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
