import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { AnimationMouseDirective } from './shared/animation-mouse.directive';
import { HighlightDirective } from './shared/highlight/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FundoAmareloDirective, AnimationMouseDirective, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';

  color:string = ''
}
