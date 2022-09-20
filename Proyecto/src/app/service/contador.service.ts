import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contador } from '../model/contador';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  url: string = "http://localhost:5000/contador"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Contador[]>(this.url);
  }
}
