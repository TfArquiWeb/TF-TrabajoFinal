import { Respuesta } from './../model/respuesta';
import { environment } from 'src/environments/environment';
import { Contador } from './../model/contador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private url: string = `${environment.host}/Contador`
  private listaCambio = new Subject<Contador[]>()
  private confirmaEliminacionContador = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listarContador() {
    return this.http.get<Contador[]>(this.url);
  }
  insertarContador(contador: Contador) {
    return this.http.post(this.url, contador);
  }
  setlistaContador(listanueva: Contador[]) {
    this.listaCambio.next(listanueva);
  }
  getlistaContador() {
    return this.listaCambio.asObservable();
  }
  modificarContador(contador: Contador) {
    return this.http.put(this.url, contador);
  }
  listarIdContador(id: number) {
    return this.http.get<Contador>(`${this.url}/${id}`);
  }
  eliminarContador(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacionContador() {
    return this.confirmaEliminacionContador.asObservable();
  }
  setConfirmaEliminacionContador(estado: Boolean) {
    this.confirmaEliminacionContador.next(estado);
  }
  buscarContadorDescripcion(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Contador[]>(`${this.url}/buscardesc`, texto.toLowerCase());
    }
    return EMPTY;
  }
  buscarContadorNombre(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Contador[]>(`${this.url}/buscarusu`, texto.toLowerCase());
    }
    return EMPTY;
  }
  ordenarContadorDesenso() {
    return this.http.get<Contador[]>(`${this.url}/ordenardesc`);
  }
  buscarContadoresCantidad() {
    return this.http.get<Respuesta[]>(`${this.url}/cantidad`);
  }
}
