import {Component, OnDestroy, OnInit} from '@angular/core';
import {FootserviceService} from '../../footservice.service';
import {Subscription} from 'rxjs/Subscription';





@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.less']
})
export class FootComponent implements OnInit, OnDestroy {
  footmyvalue: string;
  costSubscription: Subscription;


  constructor(private foootserviceService: FootserviceService) { }

  ngOnInit() {
    this.costSubscription = this.foootserviceService.Footvalue$.subscribe((footmyvalue) => {
      this.footmyvalue = footmyvalue;
    });
    console.log(this.footmyvalue);
  }

  ngOnDestroy() {
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

}
