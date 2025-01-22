import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ImprintComponent} from './components/imprint/imprint.component';
import {StartComponent} from './components/start/start.component';
import {SudokuGridComponent} from './components/sudoku-grid/sudoku-grid.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StartComponent, FlexLayoutModule, FlexLayoutServerModule, SudokuGridComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Sudoku';
}
