import { Cv } from './../model/cv';
import { RespuestaCu } from './../model/respuestaCu';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private url: string = `${environment.host}/Curriculum`
  private listaCambio = new Subject<Cv[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Cv[]>(this.url);
  }
  insertar(cv: Cv) {
    return this.http.post(this.url, cv); 
  }
  modificar(cv: Cv) {
    return this.http.put(this.url, cv);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
  buscarContadorDescripcion(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscardesc`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscardescCapacitacion(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscardesccapacitacion`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscardescExperiencia(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscardescexperiencia`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscardescHabilidad(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscardeschabilidad`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscarExperiencia(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscarexperiencia`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscarHabilidad(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Cv[]>(`${this.url}/buscarhabilidad`, texto.toLowerCase());
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Cv>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Cv[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  ordenarCurriculumDesenso() {
    return this.http.get<Cv[]>(`${this.url}/ordenardesc`);
  }
  buscarCurriculumCantidad() {
    return this.http.get<RespuestaCu[]>(`${this.url}/cantidad`);
  }
}
  