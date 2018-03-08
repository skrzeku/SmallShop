
import {Component, Injectable, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent implements OnInit {
  product: Product;
  footerString: string;

  constructor(private ShopServices: ShopService,
              private rt: ActivatedRoute,
              private routeService: Router) {
  }

  ngOnInit() {
    this.LoadOneProduct();
    this.make_string_footer();
  }



  // void to show a footer text
  make_string_footer(): void {
    this.footerString = 'Przedmiotu tego nie można kupić, stanowi on jedynie element projektu tej aplikacji. Aplikacja ta nie ma na celu naruszenia praw autorskich, jak również nie jest reklamą danego produktu. Produkt ten został wybrany w sposób przypadkowy. Wszystkie informacje o produkcie zostały pobrane w legalny sposób ze źródeł udostępnionych przez producenta.';
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

}
