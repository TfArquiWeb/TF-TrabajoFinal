import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capacitacion } from './../model/capacitacion';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  url: string = "http://localhost:5000/capacitacion"
  private listaCambio = new Subject<Capacitacion[]>()
  constructor(public http:HttpClient) { }
  listarCapacitacion() {
    return this.http.get<Capacitacion[]>(this.url);
  }
  insertarCapacitacion(capacitacion: Capacitacion) {
    return this.http.post(this.url, capacitacion);
  }
  setListaCapacitacion(listaNueva: Capacitacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaCapacitacion() {
    return this.listaCambio.asObservable();
  }
}
