import { Contador } from './../../../model/contador';
import { ContadorService } from './../../../service/contador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-buscar',
  templateUrl: './contador-buscar.component.html',
  styleUrls: ['./contador-buscar.component.css']
})
export class ContadorBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private contadorservice:ContadorService) { }

  ngOnInit(): void {
  }
  buscarContadorDescripcion(e: any) {
    this.contadorservice.buscarContadorDescripcion(e.target.value).subscribe(data=>{
      this.contadorservice.setlistaContador(data);
    });    
  }
}
