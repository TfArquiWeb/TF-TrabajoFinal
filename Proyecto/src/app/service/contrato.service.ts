import { Subject } from 'rxjs';
import { Contrato } from './../model/contrato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  url: string = "http://localhost:8081/contrato"
  private listacambio = new Subject<Contrato[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listarContrato() {
    return this.http.get<Contrato[]>(this.url);
  }
  insertarContrato(contrato: Contrato){
    return this.http.post(this.url, contrato);
  }
  setListaContrato(listanueva: Contrato[]){
    this.listacambio.next(listanueva);
  }
  getListaContrato(){
    return this.listacambio.asObservable();
  }
  getConfirmaEliminacionContrato(){
    return this.confirmaEliminacion.asObservable();
  }
  listarId(id: number) {

    return this.http.get<Contrato>(`${this.url}/${id}`);
  }
  modificar(contrato:Contrato) {

    return this.http.put(this.url, contrato);
  }
  setConfirmaEliminacionContrato(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
