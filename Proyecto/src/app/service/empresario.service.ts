import { Empresario } from './../model/empresario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresarioService {
  url: string = "http://localhost:5000/Empresario"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Empresario[]>(this.url)
  }
}
