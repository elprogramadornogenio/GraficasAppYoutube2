import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';

@Component({
  selector: 'app-grafica-polar',
  templateUrl: './grafica-polar.component.html',
  styleUrls: ['./grafica-polar.component.css']
})
export class GraficaPolarComponent implements OnInit {

  public colors: Color[] = [
    '#22F292',
    '#23FC5B',
    '#32E62C',
    '#76FC23',
    '#BAF222'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] ,backgroundColor: this.colors, borderColor: this.colors }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

}
