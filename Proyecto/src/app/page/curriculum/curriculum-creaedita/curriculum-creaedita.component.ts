import { curriculum } from './../../../model/Curriculum';
import { CapacitacionService } from './../../../service/capacitacion.service';
import { Capacitacion } from './../../../model/capacitacion';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CurriculumService } from './../../../service/curriculum.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-creaedita',
  templateUrl: './curriculum-creaedita.component.html',
  styleUrls: ['./curriculum-creaedita.component.css']
})
export class CurriculumCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  listarCapacitacion:Capacitacion[]=[];
  idCapacitacionSelecionado:number=0;
  mensaje: string = "";
  mensaje1: string = "";
  curriculum: curriculum = new curriculum();
  
  constructor(private CurriculumService: CurriculumService, private router: Router,
    private route: ActivatedRoute, private CapacitacionService:CapacitacionService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.CapacitacionService.listar().subscribe(data => { this.listarCapacitacion = data });
  }
  aceptar(): void {
    if (this.curriculum.id > 0 ) {
      let c=new Capacitacion();
      c.id= this.idCapacitacionSelecionado
      this.curriculum.Capacitacion=c;
      if(this.edicion){
        this.CurriculumService.insertarCurriculum(this.curriculum).subscribe(() => {
          this.CurriculumService.listarCurriculum().subscribe(data => {
            this.CurriculumService.setListaCurriculum(data);
          })
        });
      }else{
        this.CurriculumService.insertarCurriculum(this.curriculum).subscribe(() => {
          this.CurriculumService.listarCurriculum().subscribe(data => {
            this.CurriculumService.setListaCurriculum(data);
          });
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['curriculum']);
    } else{
      this.mensaje="Completar los datos";
    }
  }

  init() {
    if (this.edicion) {
      this.CurriculumService.listarIdCurriculum(this.id).subscribe(data => {
        this.curriculum = data
        console.log(data);
        this.idCapacitacionSelecionado = data.Capacitacion.id;
      });

    }

  }
}
