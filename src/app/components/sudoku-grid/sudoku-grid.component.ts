import {Component, OnInit} from '@angular/core';
import {Mock} from '../../utilities/mock';
import {SudokuField} from '../../utilities/module';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-sudoku-grid',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    FlexLayoutModule
  ],
  templateUrl: './sudoku-grid.component.html',
})
export class SudokuGridComponent implements OnInit {
  readonly maxGridSize: number = 9;
  demoGrid: SudokuField[][] = [];

  ngOnInit() {
    this.demoGrid = Mock.SUDOKUMOCK;
  }
}
