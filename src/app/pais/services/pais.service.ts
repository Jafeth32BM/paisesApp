import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apriUrtl: string = 'https://restcountries.eu/rest/v2';
  get parametros(){
    return new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population' );
  }
  constructor(private http: HttpClient) {}
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.parametros});
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.parametros})
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.parametros})
    .pipe(
      tap(console.log));
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this._apriUrtl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }
}
