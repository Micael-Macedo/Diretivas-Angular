import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FundoAmareloDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
}
