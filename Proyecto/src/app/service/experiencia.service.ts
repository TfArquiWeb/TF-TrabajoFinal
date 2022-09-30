import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from './../model/experiencia';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: string = "http://localhost:5000/experiencia"
  private listaCambio = new Subject<Experiencia[]>()
  private confirmaEliminacionExperiencia = new Subject<Boolean>()
  constructor(public http:HttpClient) { }
  listarExperiencia() {
    return this.http.get<Experiencia[]>(this.url);
  }
  insertarExperiencia(experiencia: Experiencia) {
    return this.http.post(this.url, experiencia);
  }
  setListaExperiencia(listaNueva: Experiencia[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaExperiencia() {
    return this.listaCambio.asObservable();
  }
  modificarExperiencia(experiencia: Experiencia) {
    return this.http.put(this.url + "/" + experiencia.id, experiencia);
  }
  listarIdExperiencia(id: number) {
    return this.http.get<Experiencia>(`${this.url}/${id}`);
  }
  eliminarExperiencia(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionExperiencia() {
    return this.confirmaEliminacionExperiencia.asObservable();
  }
  setConfirmaEliminacionExperiencia(estado: Boolean) {
    this.confirmaEliminacionExperiencia.next(estado);
  }
}
