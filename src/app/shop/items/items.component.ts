import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../models/item';
import {NavigationComponent} from '../navigation/navigation.component';
import {ShopService} from '../shop.service';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit, AfterViewInit {
  amountItem: number;
  amountlaptops: number;
  amountphones: number;
  amounttv: number;
  amountsoundbars: number;
  sumitems: number;
  newitems: number;
  usedItem: number;
  damageditem: number;
  mapcost: number[];
  grossmaxprice: number;
  grossminprice: number;
  @ViewChild('showgrosschild') showgrosschild: NavigationComponent;

  items: Item[] = [];
  constructor(private shopservice: ShopService) { }

  ngOnInit() {
    this.LoadItems();


  }
  LoadItems(): void {
this.shopservice.getshopItems().subscribe((items) => {
  this.items = items;
  this.countitems();
  this.countCategory();
  this.showcondition();
  this.mapcostitems();
});

  }

  ngAfterViewInit() {

  }
  showvalue(sumitems: number): void {
    this.sumitems = sumitems;

  }
  countitems(): void {
    this.amountItem = this.items
      .length;
  }
  countCategory (): void {
    const mapsos = this.items.map((item) => item.category);
    const key = Object.values(mapsos)[2];
    this.amountlaptops = mapsos.filter((loko) => loko === 'laptops').length;
    this.amountphones = mapsos.filter((losa) => losa === 'smartphones').length;
    this.amounttv = mapsos.filter((tv) => tv === 'tv').length;
    this.amountsoundbars = mapsos.filter((bars) => bars === 'soundbars').length;


    console.log(this.amountphones);
    console.log(this.amountlaptops);
}
showcondition (): void {
    this.newitems = this.items.map((item) => item.condition)
      .filter((sos) => sos === 'new')
      .length;
    this.usedItem = this.items.map((item) => item.condition)
      .filter((item) => item === 'used')
      .length;
    this.damageditem = this.items.map((item) => item.damaged)
      .filter((item) => item === true)
      .length;
}
mapcostitems (): void {
    this.mapcost = this.items.map((item) => item.price);
}


}


