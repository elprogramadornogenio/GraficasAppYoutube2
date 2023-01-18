import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

import { MaterialModule } from '../material/material.module';

import { GraficasRoutingModule } from './graficas-routing.module';
import { GraficaBarComponent } from './pages/grafica-bar/grafica-bar.component';
import { GraficaBaseComponent } from './pages/grafica-base/grafica-base.component';
import { GraficaBubbleComponent } from './pages/grafica-bubble/grafica-bubble.component';
import { GraficaLineaComponent } from './pages/grafica-linea/grafica-linea.component';
import { GraficaPieComponent } from './pages/grafica-pie/grafica-pie.component';
import { GraficaPolarComponent } from './pages/grafica-polar/grafica-polar.component';
import { GraficaRadarComponent } from './pages/grafica-radar/grafica-radar.component';
import { GraficaScatterComponent } from './pages/grafica-scatter/grafica-scatter.component';
import { NgChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    HomeComponent,
    GraficaBarComponent,
    GraficaBaseComponent,
    GraficaBubbleComponent,
    GraficaLineaComponent,
    GraficaPieComponent,
    GraficaPolarComponent,
    GraficaRadarComponent,
    GraficaScatterComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FlexLayoutModule,
    MaterialModule,
    GraficasRoutingModule,
    
  ]
})
export class GraficasModule { }
