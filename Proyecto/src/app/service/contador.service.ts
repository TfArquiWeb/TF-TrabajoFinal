import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contador } from '../model/contador';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  url: string = "http://localhost:8081/contador"
  private listaCambio = new Subject<Contador[]>()
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
}
