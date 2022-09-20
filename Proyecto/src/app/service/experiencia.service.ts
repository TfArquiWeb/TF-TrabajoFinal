import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from './../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: string = "http://localhost:5000/experiencia"
  constructor(public http:HttpClient) { }
  listar() {
    return this.http.get<Experiencia[]>(this.url);
  }
}
