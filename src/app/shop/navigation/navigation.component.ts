import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LayoutDirection} from '@angular/material';
import {LayoutService} from '../../shared-module/services/layout.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit , OnChanges {
  @Input () amountlaptops: number;
  @Input () amountphones: number;
  @Input () amounttv: number;
  @Input () amountsoundbars: number;
  summaryproducts: number;
  @Output () summarys: EventEmitter<number> = new EventEmitter<number>();
  @Input () newproducts: number;
  @Input () usedProduct: number;
  @Input () damagedproduct: number;
  @Input () mapcost: number[];
  minprice: number;
  maxprice: number;
  grossmaxprice: number;
  grossminprice: number;
  private fee: number = 1.23;
  CheckboxNew: boolean;
  CheckboxUsed: boolean;
  CheckboxDamaged: boolean;
  MinPrice: number;
  MaxPrice: number;

  lastLapBoolean: boolean = false;
  latPhoneBoolean: boolean = false;
  lastProduct: number = 2;


  ngOnInit() {

    this.showmarginalprices();

  }
  Check_MinMaxPrice (): void {
  console.log(this.MinPrice);
  console.log(this.MaxPrice);
  }

  check_Boxes (): void {
    this.Check_MinMaxPrice();
    if (this.CheckboxNew) {
      console.log(this.CheckboxNew);
    }
    else if (!this.CheckboxNew) {
      console.log("Check False");
    }
    else console.log("ERROR CheckBoxes!");
  }

  //Life cycle of compontent ngOnChanges is listening changes of data bounds property! That means run function when 'bound' was changed.

  ngOnChanges(Mychanges: SimpleChanges) {
    for (let property in Mychanges) {
      let change = Mychanges[property];

      let CurrentVal = change.currentValue;
      let PrevVal = change.previousValue;

      if (property === 'amountlaptops') {
        this.lastLapBoolean = CurrentVal < this.lastProduct && CurrentVal !== 0;
      }
      if (property === 'amountphones') {
        this.latPhoneBoolean = CurrentVal < this.lastProduct && CurrentVal !== 0;
      }
    } }

  check_summary (): void {
    this.summaryproducts = this.amountlaptops + this.amountsoundbars + this.amounttv + this.amountphones;
    this.summarys.emit(this.summaryproducts);
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
