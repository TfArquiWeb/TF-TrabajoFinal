import { Contador } from './../../../model/contador';
import { ContadorService } from './../../../service/contador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-buscar',
  templateUrl: './contador-buscar.component.html',
  styleUrls: ['./contador-buscar.component.css']
})
export class ContadorBuscarComponent implements OnInit {

  constructor(private contadorservice:ContadorService) { }

  ngOnInit(): void {
  }
  buscarContador(e: any) {
    let array: Contador[] = [];
    this.contadorservice.listarContador().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descContador.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.contadorservice.setlistaContador(array);
    })
  }
}
