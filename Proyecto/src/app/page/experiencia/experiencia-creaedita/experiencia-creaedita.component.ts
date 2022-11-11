import { Router, Params, ActivatedRoute } from '@angular/router';
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
  edicion: boolean = false;
  id: number = 0;
  constructor(private experienciaService: ExperienciaService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.experiencia.descExperiencia.length > 0) {
      if (this.edicion) {
        this.experienciaService.modificar(this.experiencia).subscribe(data => {
          this.experienciaService.listar().subscribe(data => {
            this.experienciaService.setLista(data);
          })
        })
      } else {
        this.experienciaService.registrar(this.experiencia).subscribe(data => {
          this.experienciaService.listar().subscribe(data => {
            this.experienciaService.setLista(data);
          })
        })
      }
      this.router.navigate(['experiencia']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.experienciaService.listarId(this.id).subscribe(data => {
        this.experiencia = data;
      })
    }
  }
}
