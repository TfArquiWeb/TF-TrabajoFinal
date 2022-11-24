import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capacitacion } from './../model/capacitacion';
import { EMPTY,Subject } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  private url: string = `${environment.host}/Capacitacion`
  private listaCambio = new Subject<Capacitacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(public http:HttpClient) { }
  listar() {
    return this.http.get<Capacitacion[]>(this.url);
  }
  registrar(capacitacion: Capacitacion) {
    return this.http.post(this.url, capacitacion);
  }
  modificar(capacitacion: Capacitacion) {
    return this.http.put(this.url, capacitacion);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    console.log("algo")
    if (texto.length != 0) { 
      return this.http.post<Capacitacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Capacitacion>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Capacitacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() { 
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  
}