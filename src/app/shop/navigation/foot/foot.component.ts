import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FootserviceService} from '../../footservice.service';
import {Subscription} from 'rxjs/Subscription';





@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.less']
})
export class FootComponent implements OnInit, OnDestroy, AfterViewInit {
  footmyvalue: string;
  costSubscription: Subscription;


  constructor(private foootserviceService: FootserviceService) { }

  ngOnInit() {
    this.costSubscription = this.foootserviceService.Footvalue$.subscribe((footmyvalue) => {
      this.footmyvalue = footmyvalue;
      console.log('My foot String: ', this.footmyvalue);
    });

  }
ngAfterViewInit() {

}


  ngOnDestroy() {
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

}
