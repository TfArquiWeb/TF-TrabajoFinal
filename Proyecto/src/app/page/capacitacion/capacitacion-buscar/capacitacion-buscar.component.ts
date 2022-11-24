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
  buscar(e: any) {
    this.capacitacionService.buscar(e.target.value).subscribe(data=>{
      this.capacitacionService.setLista(data);
    });
  }

}



