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
  listar() {
    return this.http.get<TipoPago[]>(this.url);
  }
  insertar(tipopago: TipoPago){
    return this.http.post(this.url,tipopago);
  }
  setLista(listaNueva: TipoPago[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificarTipopago(tipopago: TipoPago) {
    return this.http.put(this.url + "/" + tipopago.idTP, tipopago);
  }
  listarIdTipopago(idTP: number) {
    return this.http.get<TipoPago>(`${this.url}/${idTP}`);
  }
}
