import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from './../model/experiencia';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private url: string = `${environment.host}/Experiencia`
  private listaCambio = new Subject<Experiencia[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(public http: HttpClient) { }
  listar() {
    return this.http.get<Experiencia[]>(this.url);
  }
  registrar(experiencia: Experiencia) {
    return this.http.post(this.url, experiencia);
  }
  modificar(experiencia: Experiencia) {
    return this.http.put(this.url, experiencia);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Experiencia[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Experiencia>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Experiencia[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
