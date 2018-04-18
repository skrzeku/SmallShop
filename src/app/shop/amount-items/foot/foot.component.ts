import {Component, OnDestroy, OnInit} from '@angular/core';
import {FootserviceService} from '../../footservice.service';
import {Subscription} from 'rxjs/Subscription';
import {PartialObserver} from 'rxjs/Observer';
import {getQueryValue} from '@angular/core/src/view/query';



@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.less']
})
export class FootComponent implements OnInit, OnDestroy {

  costSubscription: Subscription;
  footmyvalue: number;

  constructor(private foootserviceService: FootserviceService) { }

  ngOnInit() {
    this.costSubscription = this.foootserviceService.Footvalue$.subscribe((footmyvalue) => {
      this.footmyvalue = footmyvalue;
    });
  }

  ngOnDestroy() {
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

}
