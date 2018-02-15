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
  constructor() { }
  ngOnInit() {
    this.check_summary();
  }
check_summary (): void {
    this.summaryitems = this.amountlaptops + this.amountsoundbars + this.amounttv + this.amountphones;
    this.summarys.emit(this.summaryitems);
}
}
