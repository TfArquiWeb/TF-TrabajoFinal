import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contador } from '../model/contador';
import { TipoPago } from '../model/tipopago';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  url: string = "http://localhost:5000/Contador"
  constructor(private http: HttpClient) { }

  listarContador() {
    return this.http.get<Contador[]>(this.url)
  }
  listarTipoPago() {
    return this.http.get<TipoPago[]>(this.url)
  }
} 
