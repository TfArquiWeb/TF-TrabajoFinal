import { EMPTY, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMoneda } from '../model/tipomoneda';

@Injectable({
  providedIn: 'root'
})
export class TipomonedaService {
  url: string = "http://localhost:5000/tipomoneda"
  private listacambio = new Subject<TipoMoneda[]>()
  private confirmaEliminacionTipoMoneda = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listarMoneda() {
    return this.http.get<TipoMoneda[]>(this.url);
  }
  insertarTipoMoneda(tipoMoneda:TipoMoneda){
    return this.http.post(this.url,tipoMoneda);
  }
  setListaTipoMoneda(listanueva:TipoMoneda[]){
    this.listacambio.next(listanueva);
  }
  getListaTipoMoneda(){
    return this.listacambio.asObservable();
  }
  modificarTipoMoneda(tipomoneda: TipoMoneda) {
    return this.http.put(this.url + "/" + tipomoneda.id, tipomoneda);
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
  buscar(texto:string){
    if(texto.length != 0){
      return this.http.post<TipoMoneda[]>(`${this.url}/buscar`,texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
