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
  private confirmaEliminacionTipopago = new Subject<Boolean>()
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
  modificarTipoPago(tipopago: TipoPago) {
    return this.http.put(this.url + "/" + tipopago.id, tipopago);
  }
  listarIdTipoPago(id: number) {
    return this.http.get<TipoPago>(`${this.url}/${id}`);
  }
  eliminarTipoPago(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionTipoPago() {
    return this.confirmaEliminacionTipopago.asObservable();
  }
  setConfirmaEliminacionTipoPago(estado: Boolean) {
    this.confirmaEliminacionTipopago.next(estado);
  }
}
