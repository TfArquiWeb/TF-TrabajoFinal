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
  listar() {
    return this.http.get<Contrato[]>(this.url);
  }
  insertar(contrato: Contrato){
    return this.http.post(this.url, contrato);
  }
  setLista(listanueva: Contrato[]){
    this.listacambio.next(listanueva);
  }
  getLista(){
    return this.listacambio.asObservable();
  }
}
