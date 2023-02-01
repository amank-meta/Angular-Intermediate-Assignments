import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class AttributeDirective {

  constructor(private el: ElementRef) { 
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('#705c8f');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('black');
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    // this.el.nativeElement.style.borderColor = color;
  }

}
