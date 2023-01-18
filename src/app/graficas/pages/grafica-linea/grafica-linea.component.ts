import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-grafica-linea',
  templateUrl: './grafica-linea.component.html',
  styleUrls: ['./grafica-linea.component.css']
})
export class GraficaLineaComponent implements OnInit {

  public cargando: boolean = true;

  public colors: Color[] = [
    '#22F292',
    '#23FC5B',
    '#32E62C',
    '#76FC23',
    '#BAF222'
  ]

  constructor(private graficasServices: GraficasService) { }

  ngOnInit(): void {
    this.graficasServices.getDioses(2).subscribe(({labels, values}) =>{
      this.lineChartData.labels = labels;
      this.lineChartData.datasets.push({data: values, label: 'Poder Dioses Egipcios', backgroundColor: this.colors[0], borderColor: this.colors[0], fill: true })
      this.cargando = false;
    });
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

}
