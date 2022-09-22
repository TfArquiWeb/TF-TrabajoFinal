import { Subject } from 'rxjs';
import { SolicitudEmpleo } from './../model/solicitudempleo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudempleoService {
  url: string = "http://localhost:5000/solicitudempleo"
  private listacambio=new Subject<SolicitudEmpleo[]>()
  constructor(public http: HttpClient) { }
  listar() {
    return this.http.get<SolicitudEmpleo[]>(this.url);
  }
  insertar(solicitudempleo:SolicitudEmpleo){
    return this.http.post(this.url,solicitudempleo);
  }
  setlistarsolicitud(listanueva:SolicitudEmpleo[]){
    this.listacambio.next(listanueva);
  }
  getlistasolicitud(){
    return this.listacambio.asObservable();
  }
}
