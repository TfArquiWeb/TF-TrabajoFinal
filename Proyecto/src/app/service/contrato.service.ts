import { Contrato } from './../model/contrato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private url: string = `${environment.host}/Contrato`
  private listaCambio = new Subject<Contrato[]>()
  private confirmaEliminacionContrato = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  listarContrato() {
    return this.http.get<Contrato[]>(this.url);
  }
  insertarContrato(capacitacion: Contrato) {
    return this.http.post(this.url, capacitacion);
  }
  setListaContrato(listaNueva: Contrato[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaContrato() {
    return this.listaCambio.asObservable();
  }
  modificarContrato(contrato: Contrato) {
    return this.http.put(this.url, contrato);
  }
  listarIdContrato(id: number) {
    return this.http.get<Contrato>(`${this.url}/${id}`);
  }
  eliminarContrato(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacionContrato() {
    return this.confirmaEliminacionContrato.asObservable();
  }
  setConfirmaEliminacionContrato(estado: Boolean) {
    this.confirmaEliminacionContrato.next(estado);
  }
}
