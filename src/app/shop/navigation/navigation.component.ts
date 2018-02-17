import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  @Input () amountlaptops: number;
  @Input () amountphones: number;
  @Input () amounttv: number;
  @Input () amountsoundbars: number;
  summaryitems: number;
  @Output () summarys: EventEmitter<number> = new EventEmitter<number>();
  @Input () newitems: number;
  @Input () usedItem: number;
  @Input () damageditem: number;
  @Input () mapcost: number[];
  minprice: number;
  maxprice: number;
  grossmaxprice: number;
  grossminprice: number;
  private fee = 1.23;
  constructor() { }
  ngOnInit() {
    this.check_summary();
    this.showmarginalprices();
  }
check_summary (): void {
    this.summaryitems = this.amountlaptops + this.amountsoundbars + this.amounttv + this.amountphones;
    this.summarys.emit(this.summaryitems);
}
showmarginalprices (): void {
   this.minprice = Math.min(...this.mapcost);
   this.maxprice = Math.max(...this.mapcost);
   console.log(this.minprice);
}
showgrossprices (): void {
this.grossmaxprice = this.maxprice * this.fee;
this.grossminprice = this.minprice * this.fee;
}
}
