import { Subject } from 'rxjs';
import { TipoPago } from './../model/tipopago';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipopagoService {
  url: string = "http://localhost:5000/tipopago"
  private listaCambio = new Subject <TipoPago[]>()
  constructor(private http: HttpClient) { }
  listarTipoPago() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertarTipoPago(tipopago: TipoPago){
    return this.http.post(this.url,tipopago);
  }
  setListaTipoPago(listaNueva: TipoPago[]){
    this.listaCambio.next(listaNueva);
  }
  getListaTipoPago(){
    return this.listaCambio.asObservable();
  }
}
 