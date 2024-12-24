import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { AnimationMouseDirective } from './shared/animation-mouse.directive';
import { HighlightDirective } from './shared/highlight/highlight.directive';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FundoAmareloDirective,
    AnimationMouseDirective,
    HighlightDirective
  ],
  exports: [
    FundoAmareloDirective,
    AnimationMouseDirective,
    HighlightDirective
  ]
})
export class AppModule { }
