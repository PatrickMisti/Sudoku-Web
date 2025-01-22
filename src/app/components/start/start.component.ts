import {Component, OnInit} from '@angular/core';
import {Level} from '../../utilities/module';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';


@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    MatProgressSpinner,
    MatCard,
    MatButton,
    MatCardHeader,
    MatCardContent,
    FlexLayoutModule
  ],

  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  level: Level[] = [];

  ngOnInit(): void {
    this.level = Object.keys(Level)
      .filter(s => !isNaN(Number(s)))
      .map((s: string) => Level[s as keyof typeof Level])
  }
}
