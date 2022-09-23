import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contador } from '../model/contador';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  url: string = "http://localhost:5000/contador"
  private listacambio = new Subject<Contador[]>
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Contador[]>(this.url);
  }
  insertar(contador: Contador) {
    return this.http.post(this.url, contador);
  }
  setlistacontador(listanueva: Contador[]) {
    this.listacambio.next(listanueva);
  }
  getlistacontador() {
    return this.listacambio.asObservable();
  }
}
