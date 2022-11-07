import { Subject } from 'rxjs';
import { Empresario } from 'src/app/model/empresario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresarioService {
  url: string = "http://localhost:8081/empresario"
  private listaCambio = new Subject<Empresario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listarEmpresario() {
    return this.http.get<Empresario[]>(this.url);
  }
  insertarEmpresario(empresario: Empresario) {

    return this.http.post(this.url, empresario);
  }

  modificarEmpresario(empresario: Empresario) {

    return this.http.put(this.url, empresario);
  }
  eliminarEmpresario(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscarEmpresario(texto: string) {

    return this.http.post<Empresario[]>(`${this.url}/buscar`, texto);
  }
  listarIdEmpresario(id: number) {

    return this.http.get<Empresario>(`${this.url}/${id}`);
  }
  getListaEmpresario() {
    return this.listaCambio.asObservable();
  }
  setListaEmpresario(listaNueva: Empresario[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacionEmpresario() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacionEmpresario(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}