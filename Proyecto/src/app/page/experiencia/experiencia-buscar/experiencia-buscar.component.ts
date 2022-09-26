import { ExperienciaService } from './../../../service/experiencia.service';
import { Experiencia } from './../../../model/experiencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-buscar',
  templateUrl: './experiencia-buscar.component.html',
  styleUrls: ['./experiencia-buscar.component.css']
})
export class ExperienciaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }
  buscarExperiencia(e: any) {
    let array: Experiencia[] = [];
    this.experienciaService.listarExperiencia().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descExperiencia.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.experienciaService.setListaExperiencia(array);
    })
  }

}
