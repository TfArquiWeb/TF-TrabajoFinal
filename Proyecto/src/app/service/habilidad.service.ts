import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from './../model/habilidad';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url: string = "http://localhost:5000/habilidad"
  private listaCambio = new Subject<Habilidad[]>()
  private confirmaEliminacionHabilidad = new Subject<Boolean>()
  constructor(public http:HttpClient) { }
  listarHabilidad() {
    return this.http.get<Habilidad[]>(this.url);
  }
  insertarHabilidad(habilidad: Habilidad) {
    return this.http.post(this.url, habilidad);
  }
  setListaHabilidad(listaNueva: Habilidad[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaHabilidad() {
    return this.listaCambio.asObservable();
  }
  modificarHabilidad(habilidad: Habilidad) {
    return this.http.put(this.url + "/" + habilidad.id, habilidad);
  }
  listarIdHabilidad(id: number) {
    return this.http.get<Habilidad>(`${this.url}/${id}`);
  }
  eliminarHabilidad(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionHabilidad() {
    return this.confirmaEliminacionHabilidad.asObservable();
  }
  setConfirmaEliminacionHabilidad(estado: Boolean) {
    this.confirmaEliminacionHabilidad.next(estado);
  }
}

