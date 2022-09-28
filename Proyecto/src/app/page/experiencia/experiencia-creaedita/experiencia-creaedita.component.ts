import { Router } from '@angular/router';
import { ExperienciaService } from './../../../service/experiencia.service';
import { Experiencia } from './../../../model/experiencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-creaedita',
  templateUrl: './experiencia-creaedita.component.html',
  styleUrls: ['./experiencia-creaedita.component.css']
})
export class ExperienciaCreaeditaComponent implements OnInit {
  experiencia:Experiencia=new Experiencia();
  mensaje: string="";
  constructor(private experienciaService: ExperienciaService,private router: Router) { }
  ngOnInit(): void {}
  aceptarExperiencia(): void {
    if (this.experiencia.descExperiencia.length > 0 ) {
      this.experienciaService.insertarExperiencia(this.experiencia).subscribe(dataexp => {
        this.experienciaService.listarExperiencia().subscribe(dataexp => {
          this.experienciaService.setListaExperiencia(dataexp);
        })
      })
      this.router.navigate(['experiencia']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
