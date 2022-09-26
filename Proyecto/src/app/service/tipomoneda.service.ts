import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMoneda } from '../model/tipomoneda';

@Injectable({
  providedIn: 'root'
})
export class TipomonedaService {
  url: string = "http://localhost:5000/tipomoneda"
  private listacambio = new Subject<TipoMoneda[]>()
  constructor(private http: HttpClient) { }
  listarMoneda() {
    return this.http.get<TipoMoneda[]>(this.url);
  }
  insertarTipoMoneda(tipoMoneda:TipoMoneda){
    return this.http.post(this.url,tipoMoneda);
  }
  setLista(listanueva:TipoMoneda[]){ 
    this.listacambio.next(listanueva);
  }
  getLista(){ 
    return this.listacambio.asObservable();
  }
}
