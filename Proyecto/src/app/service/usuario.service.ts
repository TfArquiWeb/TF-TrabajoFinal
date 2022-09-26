import { EMPTY, Subject } from 'rxjs';
import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:5000/usuario"
  private listaCambio =new Subject<Usuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
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
  eliminarUsuario(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionUsuario() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacionUsuario(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscarUsuario(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Usuario[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
