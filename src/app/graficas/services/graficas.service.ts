import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private urlBase: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDioses(posicion: number) {
    return this.http.get(`${this.urlBase}/grafica`).pipe(
      delay(3000),
      map((data: any)=>{
        const labels = Object.keys(data[posicion]);
        const values: number[] = Object.values(data[posicion]);
        return {labels, values};
      })
    );
  }

}
