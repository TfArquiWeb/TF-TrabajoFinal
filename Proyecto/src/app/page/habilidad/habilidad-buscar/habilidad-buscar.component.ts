import { Component, OnInit } from '@angular/core';
import { HabilidadService } from './../../../service/habilidad.service';
import { Habilidad } from './../../../model/habilidad';

@Component({
  selector: 'app-habilidad-buscar',
  templateUrl: './habilidad-buscar.component.html',
  styleUrls: ['./habilidad-buscar.component.css']
})
export class HabilidadBuscarComponent implements OnInit {

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit(): void {
  }
  buscarHabilidad(e: any) {
    let array: Habilidad[] = [];
    this.habilidadService.listarHabilidad().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descHabilidad.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.habilidadService.setListaHabilidad(array);
    })
  }

}