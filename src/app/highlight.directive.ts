import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('color') color = 'yellow';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  addHighLight(){
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  removeHighLight(){
    this.element.nativeElement.style.backgroundColor = null;
  }
}
