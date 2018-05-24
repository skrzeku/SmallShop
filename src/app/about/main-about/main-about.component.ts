import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LayoutService} from '../../shared-module/services/layout.service';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.less']
})
export class MainAboutComponent implements OnInit, AfterViewInit {
  visible: boolean = false;

  constructor(private layservice: LayoutService) { }

  ngOnInit() {
    this.layservice.VisibleSubject$.subscribe(value => {
      this.visible = value
      console.log(value);

    } );
  }
  ngAfterViewInit () {

  }
  testvoid (): void {
    //this.layservice.VisibleSubject$.next(false);
  }

}
