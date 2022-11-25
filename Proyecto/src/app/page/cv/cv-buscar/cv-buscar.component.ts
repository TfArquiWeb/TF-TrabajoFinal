import { CvService } from './../../../service/cv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-buscar',
  templateUrl: './cv-buscar.component.html',
  styleUrls: ['./cv-buscar.component.css']
})
export class CvBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
  }
  buscardescCapacitacion(e: any) {
    this.cvService.buscardescCapacitacion(e.target.value).subscribe(data=>{
      this.cvService.setLista(data);
    });
  }
  buscardescExperiencia(e: any) {
    this.cvService.buscardescExperiencia(e.target.value).subscribe(data=>{
      this.cvService.setLista(data);
    });
  }

  buscardescHabilidad(e: any) {
    this.cvService.buscardescHabilidad(e.target.value).subscribe(data=>{
      this.cvService.setLista(data);
    });
  }


}

 