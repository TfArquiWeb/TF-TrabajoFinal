import { environment } from './../../environments/environment';
import { Subject, EMPTY } from 'rxjs';
import { SolicitudEmpleo } from './../model/solicitudempleo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudempleoService {
  private url: string = `${environment.host}/solicitudempleo`
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
  buscarSolicitudNombre(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<SolicitudEmpleo[]>(`${this.url}/buscadorsoli`, texto.toLowerCase());
    }
    return EMPTY;
  }
  ordenarSolici() {
    return this.http.get<SolicitudEmpleo[]>(`${this.url}/ordenarsoli`);
}
}
