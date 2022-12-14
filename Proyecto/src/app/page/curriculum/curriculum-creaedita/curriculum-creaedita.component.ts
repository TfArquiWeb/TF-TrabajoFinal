import { ExperienciaService } from './../../../service/experiencia.service';
import { HabilidadService } from './../../../service/habilidad.service';
import { CapacitacionService } from './../../../service/capacitacion.service';
import { Experiencia } from './../../../model/experiencia';
import { Habilidad } from './../../../model/habilidad';
import { Capacitacion } from './../../../model/capacitacion';
import { curriculum } from '../../../model/curriculum';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CurriculumService } from './../../../service/curriculum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-creaedita',
  templateUrl: './curriculum-creaedita.component.html',
  styleUrls: ['./curriculum-creaedita.component.css']
}) 
export class CurriculumCreaeditaComponent implements OnInit {
  Curriculum: curriculum = new curriculum();
  listaCapacitacion: Capacitacion[] = []; 
  idCapacitacionSelecionado: number=0;
  listaHabilidad: Habilidad[] = [];
  idHabilidadSeleccionado: number = 0;
  listaExperiencia: Experiencia[] = [];
  idExperienciaSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private curriculumService: CurriculumService, private router: Router, 
    private route: ActivatedRoute, private capacitacionService: CapacitacionService,
    private HabilidadService: HabilidadService,
    private ExperienciaService: ExperienciaService
    ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.capacitacionService.listar().subscribe(data => {this.listaCapacitacion = data});
    this.HabilidadService.listar().subscribe(data => {this.listaHabilidad = data});
    this.ExperienciaService.listar().subscribe(data => {this.listaExperiencia = data});
  }
  aceptar(): void {  
    //if (this.idExperienciaSeleccionado > 0 && this.idHabilidadSeleccionado > 0) {
      let c = new Capacitacion();
      c.id = this.idCapacitacionSelecionado;
      this.Curriculum.Capacitacion = c;

      let e = new Experiencia();
      e.id = this.idExperienciaSeleccionado;
      this.Curriculum.Experiencia = e;

      let h = new Habilidad();
      h.id = this.idHabilidadSeleccionado;
      this.Curriculum.Habilidad = h;

      if (this.edicion) {
        this.curriculumService.modificar(this.Curriculum).subscribe(() => {
          this.curriculumService.listar().subscribe(data => {
            this.curriculumService.setLista(data);
          })
        })
      } else {
        this.curriculumService.insertar(this.Curriculum).subscribe(() => {
          this.curriculumService.listar().subscribe(data => {
            this.curriculumService.setLista(data);
          });
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['curriculum']);
    //} else {
    //  this.mensaje = "Complete los valores requeridos";
    //}
  }
  init() {
    if (this.edicion) {
      this.curriculumService.listarId(this.id).subscribe(data => {
        this.Curriculum = data
        console.log(data);
        this.idCapacitacionSelecionado = data.Capacitacion.id;
        this.idHabilidadSeleccionado = data.Habilidad.id;
        this.idExperienciaSeleccionado = data.Experiencia.id;
      })
    }
  }
}
