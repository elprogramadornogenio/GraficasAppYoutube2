import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { map, tap, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private _auth: Auth | undefined;

  get auth() {
    return this._auth;
  }
  constructor(private http: HttpClient, private router: Router) {
    if(!localStorage.getItem('cuenta')){
      return;
    } else {
      this._auth = JSON.parse(localStorage.getItem('cuenta')!) || undefined;
    }
  }


  login(email: string, password: string) {
    return this.http.get<Auth>(`${this.baseUrl}/usuario/1`).pipe(
      map((auth: Auth) =>{
        if(email === auth.email && password === auth.password) {
          return this._auth = auth;
        }

        return undefined;
      }),
      tap(resp =>{
        this._auth = resp;
      }),
      tap(resp =>{
        if(resp!== undefined) {
          localStorage.setItem('id', resp.id)
          localStorage.setItem('cuenta', JSON.stringify(resp));
        }
      })
    )
  }


  veificarAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuario/1`).pipe(
      map(resp =>{
        this._auth = resp;
        return true;
      })
    )
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('cuenta');
    this.router.navigate(['./auth']);
  }
}
