import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[animationMouse]'
})
export class AnimationMouseDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.transition = '0.5s'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('purple')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color
  }


}
