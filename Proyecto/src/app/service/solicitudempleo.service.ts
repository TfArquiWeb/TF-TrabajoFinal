import { Subject } from 'rxjs';
import { SolicitudEmpleo } from './../model/solicitudempleo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudempleoService {
  url: string = "http://localhost:8081/solicitudempleo"
  private listacambio=new Subject<SolicitudEmpleo[]>()
  constructor(public http: HttpClient) { }
  listarSolicitud() {
    return this.http.get<SolicitudEmpleo[]>(this.url);
  }
  insertarSolicitud(solicitudempleo:SolicitudEmpleo){
    return this.http.post(this.url,solicitudempleo);
  }
  setlistarSolicitud(listanueva:SolicitudEmpleo[]){
    this.listacambio.next(listanueva);
  }
  getlistaSolicitud(){
    return this.listacambio.asObservable();
  }
}
