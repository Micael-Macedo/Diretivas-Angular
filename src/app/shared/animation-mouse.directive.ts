import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[animationMouse]'
})
export class AnimationMouseDirective {

  constructor() {
    this.transitionTime = '0.5s'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('purple')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = ''
  @HostBinding('style.transition') transitionTime: string = ''

  private highlight(color: string){
    this.backgroundColor = color
  }




}
