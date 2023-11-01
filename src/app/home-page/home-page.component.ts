import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  template: `
    <div [chart]="chart"></div>
  `,
})
export class HomePageComponent {

  colorLight = false;
  currentIcon = 'bi bi-database';
  iconsIndex = 0;
  icons = ['bi bi-database','bi bi-hdd','bi bi-bar-chart','bi bi-pc-display-horizontal'];
  
  // chartSkillPython : Chart;
  chartId = 'tachometer-chart';

  //Skilss value 
  valueSkillPython = 80;
  valueSkillR = 50;
  valueSkillSql = 85;
  valueSkillJs = 25;
  valueSkillAngular = 20;
  valueSkillHtml = 60;
  valueSkillCss = 60;
  valueSkillPhp = 70;

  constructor() {
    interval(1000).subscribe(() => {
      this.iconsIndex = (this.iconsIndex + 1) % this.icons.length;
      this.currentIcon = this.icons[this.iconsIndex];
    });
  
  }

  setModeTheme() {
    if (this.colorLight) {
      this.colorLight = false;
    } 
    
    else {
      this.colorLight = true;
    }
  }
}
