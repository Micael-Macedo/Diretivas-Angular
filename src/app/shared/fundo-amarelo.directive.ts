import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor() {
    this.backgroundColor = 'yellow'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = ''
  @HostBinding('style.transition') transition: string = ''

}
