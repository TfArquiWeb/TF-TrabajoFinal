import { Subject } from 'rxjs';
import { Empresario } from 'src/app/model/empresario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresarioService {
  url: string = "http://localhost:5000/empresario"
  private listaCambio = new Subject<Empresario[]>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Empresario[]>(this.url);
  }  
  insertar(empresario: Empresario) {
    return this.http.post(this.url, empresario);
  }
  setListaEmpresario(listaNueva: Empresario[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaEmpresario() {
    return this.listaCambio.asObservable();
  }
}