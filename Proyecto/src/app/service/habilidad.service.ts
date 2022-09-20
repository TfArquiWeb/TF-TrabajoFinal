import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from './../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url: string = "http://localhost:5000/habilidad"
  constructor(public http:HttpClient) { }
  listar() {
    return this.http.get<Habilidad[]>(this.url);
  }
}
