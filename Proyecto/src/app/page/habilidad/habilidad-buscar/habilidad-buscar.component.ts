import { Component, OnInit } from '@angular/core';
import { HabilidadService } from './../../../service/habilidad.service';
import { Habilidad } from './../../../model/habilidad';

@Component({
  selector: 'app-habilidad-buscar',
  templateUrl: './habilidad-buscar.component.html',
  styleUrls: ['./habilidad-buscar.component.css']
})
export class HabilidadBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private habilidadService: HabilidadService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.habilidadService.buscar(e.target.value).subscribe(data => {
      this.habilidadService.setLista(data);
    });
  }

}