import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
                //nativeElement give u a access to every DOM elements!
  constructor( private service: ElementRef) {
    service.nativeElement.style.fontWeight = 800;
  }

}
