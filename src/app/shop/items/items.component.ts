import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  amountItem: number;
  amountlaptops: number;
  amountphones: number;
  amounttv: number;
  amountsoundbars: number;
  sumitems: number;
  newitems: number;
  usedItem: number;
  damageditem: number;

  items: Item[] = [
    {
      id: 1,
      name: 'iphone',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: false,
      price: 1999,
      delivery_cost: 35 },
    {
      id: 2,
      name: 'macbook',
      category: 'laptops',
      color: 'white',
      condition: 'new',
      damaged: false,
      price: 2500,
      delivery_cost: 50 },
    {
      id: 3,
      name: 'iphone',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35 },
    {
      id: 4,
      name: 'iphone',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: true,
      price: 1999,
      delivery_cost: 35 },
    {
    id: 5,
  name: 'iphone',
  category: 'smartphones',
  color: 'gold',
  condition: 'used',
  damaged: false,
  price: 1999,
  delivery_cost: 35 },
    {
    id: 6,
  name: 'iphone',
  category: 'smartphones',
  color: 'gold',
  condition: 'used',
  damaged: false,
  price: 1999,
  delivery_cost: 35 },
    {
id: 7,
  name: 'iphone',
  category: 'smartphones',
  color: 'gold',
  condition: 'used',
  damaged: false,
  price: 1999,
  delivery_cost: 35 },
    {
id: 8,
  name: 'samsung',
  category: 'smartphones',
  color: 'silver',
  condition: 'used',
  damaged: true,
  price: 567,
  delivery_cost: 35 },
  ];
  constructor() { }

  ngOnInit() {
    this.countitems();
    this.countCategory();
    this.showcondition();
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

}


