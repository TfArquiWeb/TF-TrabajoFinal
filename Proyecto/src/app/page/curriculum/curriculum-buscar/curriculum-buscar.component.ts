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
  buscar(e: any) {
    this.curriculumService.buscar(e.target.value).subscribe(data=>{
      this.curriculumService.setLista(data);
    });
  }

}

