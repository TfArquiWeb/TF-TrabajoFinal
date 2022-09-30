import { Curriculum } from '../model/curriculum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  url: string = "http://localhost:5000/curriculum"
  private listaCambio = new Subject<Curriculum[]>()
  constructor(private http: HttpClient) { }
  listarCurriculum() {
    return this.http.get<Curriculum[]>(this.url);
  }
  insertarCurriculum(propietario: Curriculum) {
    return this.http.post(this.url, propietario);
  }
  setListaCurriculum(listaNueva: Curriculum[]) {
    this.listaCambio.next(listaNueva);
  }
  getListaCurriculum() {
    return this.listaCambio.asObservable();
  }

}
