import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-amount-items',
  templateUrl: './amount-items.component.html',
  styleUrls: ['./amount-items.component.less']
})
export class AmountItemsComponent{
@Input() amountProduct: number;
  constructor() { }

}
