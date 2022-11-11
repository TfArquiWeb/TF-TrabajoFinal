import { Subject } from 'rxjs';
import { SolicitudEmpleo } from './../model/solicitudempleo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudempleoService {
  url: string = "http://localhost:8081/solicitudempleo" //CAMBIO DE URL
  private listacambio=new Subject<SolicitudEmpleo[]>()
  private confirmaEliminacionSolicitud = new Subject<Boolean>()
  constructor(public http: HttpClient) { }
  listarSolicitud() {
    return this.http.get<SolicitudEmpleo[]>(this.url);
  }
  insertarSolicitud(solicitudempleo:SolicitudEmpleo){
    return this.http.post(this.url,solicitudempleo);
  }
  modificarSolicitud(solicitudempleo: SolicitudEmpleo) {

    return this.http.put(this.url, solicitudempleo);
  }
  eliminarSolicitud(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscarSolicitud(texto: string) {

    return this.http.post<SolicitudEmpleo[]>(`${this.url}/buscar`, texto);
  }
  listarIdSolicitud(id: number) {

    return this.http.get<SolicitudEmpleo>(`${this.url}/${id}`);
  }
  getlistaSolicitud(){
    return this.listacambio.asObservable();
  }
  setlistarSolicitud(listanueva:SolicitudEmpleo[]){
    this.listacambio.next(listanueva);
  }
  getConfirmaEliminacionSolicitud() {
    return this.confirmaEliminacionSolicitud.asObservable();
  }
  setConfirmaEliminacionSolicitud(estado: Boolean) {
    this.confirmaEliminacionSolicitud.next(estado);
  }
}
