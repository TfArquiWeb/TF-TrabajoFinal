import { SolicitudEmpleo } from './../model/solicitudempleo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudempleoService {
  url: string = "http://localhost:5000/solicitudempleo"
  constructor(public http: HttpClient) { }
  listar() {
    return this.http.get<SolicitudEmpleo[]>(this.url);
  }
}
