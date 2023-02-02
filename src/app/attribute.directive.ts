import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class AttributeDirective {

  constructor(private el: ElementRef) { 
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.opacity = 0.85;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.opacity = 1;

  }

}
