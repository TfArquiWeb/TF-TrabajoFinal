
import { CurriculumService } from './../../../service/curriculum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-buscar',
  templateUrl: './curriculum-buscar.component.html',
  styleUrls: ['./curriculum-buscar.component.css']
})
export class CurriculumBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
  }
  buscardescCapacitacion(e: any) {
    this.curriculumService.buscardescCapacitacion(e.target.value).subscribe(data=>{
      this.curriculumService.setLista(data);
    });
  }
  buscardescExperiencia(e: any) {
    this.curriculumService.buscardescExperiencia(e.target.value).subscribe(data=>{
      this.curriculumService.setLista(data);
    });
  }

  buscardescHabilidad(e: any) {
    this.curriculumService.buscardescHabilidad(e.target.value).subscribe(data=>{
      this.curriculumService.setLista(data);
    });
  }


}

 