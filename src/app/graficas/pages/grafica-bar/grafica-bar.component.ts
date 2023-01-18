import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-grafica-bar',
  templateUrl: './grafica-bar.component.html',
  styleUrls: ['./grafica-bar.component.css']
})
export class GraficaBarComponent implements OnInit {

  public cargando: boolean = true;

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  constructor(private graficasServices: GraficasService) { }

  ngOnInit(): void {
    this.graficasServices.getDioses(0).subscribe(({labels, values}) => {
      this.barChartData.labels = labels
      this.barChartData.datasets.push({data: values, label: 'Poder Dioses Griegos' });
      this.chart?.update; 
      this.cargando = false;
    });
    
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}
