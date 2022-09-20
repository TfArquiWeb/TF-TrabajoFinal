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
  listar() {
    return this.http.get<Capacitacion[]>(this.url);
  }
  insertar(capacitacion: Capacitacion) {
    return this.http.post(this.url, capacitacion);
  }
  setLista(listaNueva: Capacitacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
