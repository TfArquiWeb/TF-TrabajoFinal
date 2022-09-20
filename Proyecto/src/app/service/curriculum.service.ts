import { CurriculumVitae } from './../model/Curriculum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  url: string = "http://localhost:5000/curriculum"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<CurriculumVitae[]>(this.url);
  }
}