import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LayoutDirection} from '@angular/material';
import {LayoutService} from '../../shared-module/services/layout.service';
import {FilterBy} from '../../shared-module/pipes/fillterBy';
import {Product} from '../models/product';

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
  @Output () checked: EventEmitter<boolean> = new EventEmitter<boolean>();
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
  product: Product[];
  FillterName: string;
  FilterValue: any;
  FilterValue2: any;

  lastLapBoolean: boolean = false;
  latPhoneBoolean: boolean = false;
  lastProduct: number = 2;

    constructor (private mypipe: FilterBy)  {}
  ngOnInit() {

    this.showmarginalprices();

  }
  Check_MinMaxPrice (): void {
      if (this.MinPrice === null) {
        this.MinPrice = this.minprice;
      }
      if (this.MaxPrice === null) {
        this.MaxPrice = this.maxprice;
      }
  }

  check_Boxes (): void {
      this.showmarginalprices();

    if (this.CheckboxNew) {
      this.FillterName = 'condition';
      this.FilterValue = 'used';
      this.FilterValue2 = 'new';
      this.Check_MinMaxPrice();
    }
    else if (!this.CheckboxNew) {
      this.FillterName = undefined;
      this.FilterValue = undefined;
      this.FilterValue2 = undefined;
      this.Check_MinMaxPrice();
    }
    this.checked.emit(true);
    this.MaxPrice = null;
    this.MinPrice = null;
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
