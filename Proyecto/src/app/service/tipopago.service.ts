import { TipoPago } from './../model/tipopago';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipopagoService {
  url: string = "http://localhost:5000/tipopago"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }
}
 