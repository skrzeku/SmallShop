
import {Component, Injectable, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../models/item';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent implements OnInit {
  item: Item;
  footerString: string;

  constructor(private ShopServices: ShopService,
              private rt: ActivatedRoute,
              private routeService: Router) {
  }

  ngOnInit() {
    this.LoadOneItem();
    this.make_string_footer();
  }



  // void to show a footer text
  make_string_footer(): void {
    this.footerString = 'Przedmiotu tego nie można kupić, stanowi on jedynie element projektu tej aplikacji. Aplikacja ta nie ma na celu naruszenia praw autorskich, jak również nie jest reklamą danego produktu. Produkt ten został wybrany w sposób przypadkowy. Wszystkie informacje o produkcie zostały pobrane w legalny sposób ze źródeł udostępnionych przez producenta.';
  }

  LoadOneItem(): void {
    /* OLD Version, but very slowly!!!
      // +convert string to number
      const id = +this.rt.snapshot.params['id'];

      this.ShopServices.getoneitem(id).subscribe((item) => {
        this.item = item;
      }); */
    // new faster version!!
    // data give u abilities to read a property 'item' from shop-routing.module.ts (resolve)

    this.item = this.rt.snapshot.data['item'];
  }
  ShowNextItem(item: Item) {
    this.routeService.navigate(['/shop', item.id + 1]);
    this.LoadOLdItem();
  }

  ShowPrevItem(item: Item) {
    this.routeService.navigate(['/shop', item.id - 1]);
    this.LoadOLdItem();
  }

  LoadOLdItem(): void {
    const id = +this.rt.snapshot.params['id'];

    this.ShopServices.getoneitem(id).subscribe((item) => {
      this.item = item;
    });
  }

}
