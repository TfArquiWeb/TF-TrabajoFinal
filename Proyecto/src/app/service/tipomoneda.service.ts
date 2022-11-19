import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMoneda } from '../model/tipomoneda';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipomonedaService {
  url: string = "http://localhost:8081/TipoMoneda"
  private listaCambio = new Subject<TipoMoneda[]>()
  private confirmaEliminacionTipoMoneda = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  listarTipoMoneda() {
    return this.http.get<TipoMoneda[]>(this.url);
  }
  insertarTipoMoneda(capacitacion: TipoMoneda) {
    return this.http.post(this.url, capacitacion);
  }
  setListaTipoMoneda(listaNueva: TipoMoneda[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaTipoMoneda() {
    return this.listaCambio.asObservable();
  }
  modificarTipoMoneda(tipoMoneda: TipoMoneda) {
    return this.http.put(this.url + "/" + tipoMoneda.idtipomoneda, tipoMoneda);
  }
  listarIdTipoMoneda(id: number) {
    return this.http.get<TipoMoneda>(`${this.url}/${id}`);
  }
  eliminarTipoMoneda(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionTipoMoneda() {
    return this.confirmaEliminacionTipoMoneda.asObservable();
  }
  setConfirmaEliminacionTipoMoneda(estado: Boolean) {
    this.confirmaEliminacionTipoMoneda.next(estado);
  }
}
