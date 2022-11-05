import { Contrato } from './../model/contrato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  url: string = "http://localhost:8081/contrato"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Contrato[]>(this.url);
  }
}