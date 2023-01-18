import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-grafica-base',
  templateUrl: './grafica-base.component.html',
  styleUrls: ['./grafica-base.component.css']
})
export class GraficaBaseComponent implements OnInit {

  public cargando: boolean = true;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getDioses(1).subscribe(({labels, values})=>{
      this.doughnutChartDatasets.push({data: values, label: 'Poder Dioses Norticos'});
      this.doughnutChartLabels = labels;
      this.chart?.update();
      this.cargando = false;
    })
    
  }

  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };


}
