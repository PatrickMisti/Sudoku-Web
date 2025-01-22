import {SudokuField} from './module';

export class Mock {
  static #SUDOKUMOCKDEMO: SudokuField[] =
    [
      {value: 5, position: {row: 0, col: 0}, hint: [1, 2, 3]},
      {value: 3, position: {row: 0, col: 1}, hint: [4, 5, 6]},
      {value: 0, position: {row: 0, col: 2}, hint: [7, 8, 9]},
      {value: 6, position: {row: 1, col: 0}, hint: [1, 2, 3]},
      {value: 0, position: {row: 1, col: 1}, hint: [4, 5, 6]},
      {value: 0, position: {row: 1, col: 2}, hint: [7, 8, 9]},
      {value: 0, position: {row: 2, col: 0}, hint: [1, 2, 3]},
      {value: 9, position: {row: 2, col: 1}, hint: [4, 5, 6]},
      {value: 8, position: {row: 2, col: 2}, hint: [7, 8, 9]},
    ];

  static get SUDOKUMOCK(): SudokuField[][] {
    const list = [];
    for (let i = 0; i < 9; i++) {
      list.push(Mock.#SUDOKUMOCKDEMO);
    }
    return list;
  }
}
