import { Subject } from 'rxjs';
import { TipoPago } from './../model/tipopago';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipopagoService {
  url: string = "http://localhost:8081/TipoPago"
  private listaCambio = new Subject <TipoPago[]>()
  constructor(private http: HttpClient) { }
  listarTipopago() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertarTipopago(tipopago: TipoPago){
    return this.http.post(this.url,tipopago);
  }
  setListaTipopago(listaNueva: TipoPago[]){
    this.listaCambio.next(listaNueva);
  }
  getListaTipopago(){
    return this.listaCambio.asObservable();
  }
}
 