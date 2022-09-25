import { Subject } from 'rxjs';
import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:5000/usuario"
  private listaCambio =new Subject<Usuario[]>()
  constructor(private http: HttpClient) { }
  listarUsuario() {
    return this.http.get<Usuario[]>(this.url);
  }
  insertarUsuario(usuario:Usuario){
    return this.http.post(this.url,usuario);
  }
  setListaUsuario(listanueva:Usuario[]){
    this.listaCambio.next(listanueva);
  }
  getListaUsuario(){
    return this.listaCambio.asObservable();
  }
  modificarUsuario(usuario:Usuario){
    return this.http.put(this.url+"/"+usuario.id,usuario)
  }
  listarIdUsuario(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
}
