import { Empresario } from './../model/empresario';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = 'http://localhost:5000/';
  constructor(private http:HttpClient) { }
  ListaContadores(){
  }
  getEmpresarios(){
    return this.http.get<Empresario[]>(`${this.url}empresarios`)
  }
}
