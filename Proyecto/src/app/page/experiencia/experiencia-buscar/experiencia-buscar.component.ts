import { Component, OnInit } from '@angular/core';
import { Experiencia } from './../../../model/experiencia';
import { ExperienciaService } from './../../../service/experiencia.service';

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
  buscar(e: any) {
    this.experienciaService.buscar(e.target.value).subscribe(data => {
      this.experienciaService.setLista(data);
    });
  }

}
