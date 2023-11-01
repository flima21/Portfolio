import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-tachometer-chart',
  templateUrl: './tachometer-chart.component.html',
  styleUrls: ['./tachometer-chart.component.css'],
  template: `
    <div [chart]="chart"></div>
  `
})
export class TachometerChartComponent {
}
