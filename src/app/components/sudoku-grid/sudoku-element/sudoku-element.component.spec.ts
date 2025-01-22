import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuElementComponent } from './sudoku-element.component';

describe('SudokuElementComponent', () => {
  let component: SudokuElementComponent;
  let fixture: ComponentFixture<SudokuElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
