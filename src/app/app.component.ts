import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ImprintComponent} from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImprintComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Sudoku';
}
