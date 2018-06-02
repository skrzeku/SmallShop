import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
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
  @HostBinding('class.condition') newOne: boolean = false;
  @HostBinding('class.usecondition') usedOne: boolean = false;


  constructor(private foootserviceService: FootserviceService) { }

  ngOnInit() {

    this.costSubscription = this.foootserviceService.Footvalue$.subscribe((footmyvalue) => {
      this.footmyvalue = footmyvalue;
      console.log('My foot String: ', this.footmyvalue);
      this.checkfootvalue();
    });



  }
ngAfterViewInit() {



}
checkfootvalue () {
    if (this.footmyvalue === 'Used') {
      this.usedOne = true;
      this.newOne = false;
      console.log('UsedOneWorks', this.usedOne);
    }
    else if (this.footmyvalue === 'New') {
      this.newOne = true;
      this.usedOne = false;
      console.log('NewOne', this.newOne);
    }
}


  ngOnDestroy() {
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

}
