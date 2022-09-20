import { Empresario } from 'src/app/model/empresario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresarioService {
  url: string = "http://localhost:5000/empresario"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Empresario[]>(this.url);
  }
}