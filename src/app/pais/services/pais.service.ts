import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apriUrtl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this._apriUrtl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this._apriUrtl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }
}
