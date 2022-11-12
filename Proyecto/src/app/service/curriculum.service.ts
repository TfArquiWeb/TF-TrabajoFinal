import { environment } from 'src/environments/environment';
import { curriculum } from './../model/Curriculum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private url: string = `${environment.host}/curriculum`
  private listaCambio = new Subject<curriculum[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<curriculum[]>(this.url);
  }
  insertar(curriculum: curriculum) {
    return this.http.post(this.url, curriculum);
  }
  modificar(curriculum: curriculum) {
    return this.http.put(this.url, curriculum);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    console.log("algo")
    if (texto.length != 0) { 
      return this.http.post<curriculum[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<curriculum>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: curriculum[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
