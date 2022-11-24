import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from './../model/habilidad';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url: string = `${environment.host}/Habilidad`
  private listaCambio = new Subject<Habilidad[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(public http: HttpClient) { }
  listar() {
    return this.http.get<Habilidad[]>(this.url);
  }
  registrar(habilidad: Habilidad) {
    return this.http.post(this.url, habilidad);
  }
  modificar(habilidad: Habilidad) {
    return this.http.put(this.url, habilidad);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Habilidad[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Habilidad>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Habilidad[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
} 