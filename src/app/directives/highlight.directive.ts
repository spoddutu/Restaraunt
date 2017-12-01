import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding("class.highlight") mouseEntered = false;	

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
  	this.mouseEntered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
  	this.mouseEntered = false;
  }

}
