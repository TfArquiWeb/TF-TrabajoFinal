import { CurriculumVitae } from './../model/Curriculum';
import { Empresario } from 'src/app/model/empresario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contador } from '../model/contador';
import { TipoPago } from '../model/tipopago';
import { Contrato } from './../model/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  url: string = "http://localhost:5000/"
  constructor(private http: HttpClient) { }

  getlistarContador() {
    return this.http.get<Contador[]>(`${this.url}Contador`);
  }
  getlistarTipoPago() {
    return this.http.get<TipoPago[]>(`${this.url}TipoPago`)
  }
  getlistarEmpresario() {
    return this.http.get<Empresario[]>(`${this.url}Empresario`)
  }
  getlistarCurriculum() {
    return this.http.get<CurriculumVitae[]>(`${this.url}Curriculum`)
  }
  getlistarContrato() {
    return this.http.get<Contrato[]>(`${this.url}Contrato`)
  }
} 
