import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:5000/usuario"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Usuario[]>(this.url);
  }
}
