import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.less']
})
export class ProductsSectionComponent implements OnInit {
@Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
