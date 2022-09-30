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
  private confirmaEliminacionTipopago = new Subject<Boolean>()
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
  modificarTipopago(tipopago: TipoPago) {
    return this.http.put(this.url + "/" + tipopago.id, tipopago);
  }
  listarIdTipopago(id: number) {
    return this.http.get<TipoPago>(`${this.url}/${id}`);
  }
  eliminarTipopago(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionTipopago() {
    return this.confirmaEliminacionTipopago.asObservable();
  }
  setConfirmaEliminacionTipopago(estado: Boolean) {
    this.confirmaEliminacionTipopago.next(estado);
  }
}
