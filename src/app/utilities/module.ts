
export enum Level {
  Easy = 0,
  Medium = 1,
  Hard = 2
}

export interface Position {
  row: number;
  col: number;
}

export interface SudokuField {
  value: number;
  position: Position;
  hint: number[];
}
