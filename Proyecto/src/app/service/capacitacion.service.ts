import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Capacitacion } from './../model/capacitacion';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  url: string = "http://localhost:5000/capacitacion"
  constructor(public http:HttpClient) { }
  listar() {
    return this.http.get<Capacitacion[]>(this.url);
  }
}
