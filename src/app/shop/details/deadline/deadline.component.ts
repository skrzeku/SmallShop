import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.less']
})
export class DeadlineComponent implements OnInit {

  @Input () product: Product;
  @Output () equalDate = new EventEmitter<number>();
  myDatems: any;
ngOnInit () {
  this.DateVoid();
}


DateVoid () {

  const timeleft = +this.product.finish_date - +new Date();
  this.myDatems = Math.round(timeleft / (1000 * 60 * 60 * 24));
  this.equalDate.emit(this.myDatems);
}
}
