import { Subject } from 'rxjs';
import { Contrato } from './../model/contrato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  url: string = "http://localhost:5000/contrato"
  private listacambio = new Subject<Contrato[]>
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
}
