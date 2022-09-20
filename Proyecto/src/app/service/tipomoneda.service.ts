import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMoneda } from '../model/tipomoneda';

@Injectable({
  providedIn: 'root'
})
export class TipomonedaService {
  url: string = "http://localhost:5000/tipomoneda"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TipoMoneda[]>(this.url);
  }
}
