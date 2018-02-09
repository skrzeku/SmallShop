import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }
  ngOnInit() {
  }
check_summary (): void {
    this.summaryitems = this.amountlaptops + this.amountsoundbars + this.amounttv + this.amountphones;
}
}
