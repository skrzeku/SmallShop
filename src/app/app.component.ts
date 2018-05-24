import {Component, OnInit} from '@angular/core';
import {LayoutService} from './shared-module/services/layout.service';
import {visitAll} from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  //visible: boolean = false;

  constructor (private layservice: LayoutService) {}
ngOnInit () {
    //i dont need it, but this is the easist way!
   //this.layservice.VisibleSubject$.subscribe(value => { this.visible = value;
    //});
}
}
