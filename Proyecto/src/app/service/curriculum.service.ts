import { curriculum } from './../model/Curriculum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  url: string = "http://localhost:8081/curriculum"
  private listaCambio = new Subject<curriculum[]>()
  private confirmaEliminacioncurriculum = new Subject<Boolean>()
  
  constructor(private http: HttpClient) { }
  listarCurriculum() {
    return this.http.get<curriculum[]>(this.url);
  }
  insertarCurriculum(experiencia: curriculum) {
    return this.http.post(this.url, experiencia);
  }
  setListaCurriculum(listaNueva: curriculum[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaCurriculum() {
    return this.listaCambio.asObservable();
  }
  modificarCurriculum(curriculum: curriculum) {
    return this.http.put(this.url + "/" + curriculum.id, curriculum);
  }
  listarIdCurriculum(id: number) {
    return this.http.get<curriculum>(`${this.url}/${id}`);
  }
  eliminarCurriculum(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacionCurriculum() {
    return this.confirmaEliminacioncurriculum.asObservable();
  }
  setConfirmaEliminacionCurriculum(estado: Boolean) {
    this.confirmaEliminacioncurriculum.next(estado);
  }
}
