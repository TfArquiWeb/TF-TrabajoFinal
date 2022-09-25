import { Capacitacion } from './../../../model/capacitacion';
import { CapacitacionService } from './../../../service/capacitacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacitacion-buscar',
  templateUrl: './capacitacion-buscar.component.html',
  styleUrls: ['./capacitacion-buscar.component.css']
})
export class CapacitacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private capacitacionService: CapacitacionService) { }

  ngOnInit(): void {
  }
  buscarCapacitacion(e: any) {
    let array: Capacitacion[] = [];
    this.capacitacionService.listarCapacitacion().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descCapacitacion.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.capacitacionService.setListaCapacitacion(array);
    })
  }

}
