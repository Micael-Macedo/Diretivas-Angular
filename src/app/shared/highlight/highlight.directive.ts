import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() {
        this.transition = '0.5s'
  }

  @Input() appHighlight: string = ''

  @Input() defaultColor: string = ''

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || this.defaultColor || 'red ')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

  @HostBinding('style.transition') transition: string = ''
  @HostBinding('style.background-color') backgroundColor: string = ''


  private highlight(color: string){
    this.backgroundColor = color
  }
}
