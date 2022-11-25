import { CvService } from './../../../service/cv.service';
import { ExperienciaService } from './../../../service/experiencia.service';
import { HabilidadService } from './../../../service/habilidad.service';
import { CapacitacionService } from './../../../service/capacitacion.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Capacitacion } from './../../../model/capacitacion';
import { Experiencia } from './../../../model/experiencia';
import { Habilidad } from './../../../model/habilidad';
import { Cv } from './../../../model/cv';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-creaedita',
  templateUrl: './cv-creaedita.component.html',
  styleUrls: ['./cv-creaedita.component.css']
})
export class CvCreaeditaComponent implements OnInit {
  id: number = 0;
  cv: Cv = new Cv();
  listaCapacitacion: Capacitacion[] = []; 
  idCapacitacionSelecionado: number=0;
  listaHabilidad: Habilidad[] = [];
  idHabilidadSeleccionado: number = 0;
  listaExperiencia: Experiencia[] = [];
  idExperienciaSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";
  edicion: boolean = false;
  
  constructor(private cvService: CvService, private router: Router, 
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
      this.cv.Capacitacion = c;

      let e = new Experiencia();
      e.id = this.idExperienciaSeleccionado;
      this.cv.Experiencia = e;

      let h = new Habilidad();
      h.id = this.idHabilidadSeleccionado;
      this.cv.Habilidad = h;

      if (this.edicion) {
        this.cvService.modificar(this.cv).subscribe(() => {
          this.cvService.listar().subscribe(data => {
            this.cvService.setLista(data);
          })
        })
      } else {
        this.cvService.insertar(this.cv).subscribe(() => {
          this.cvService.listar().subscribe(data => {
            this.cvService.setLista(data);
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
      this.cvService.listarId(this.id).subscribe(data => {
        this.cv = data
        console.log(data);
        this.idCapacitacionSelecionado = data.Capacitacion.id;
        this.idHabilidadSeleccionado = data.Habilidad.id;
        this.idExperienciaSeleccionado = data.Experiencia.id;
      });
    }

  }
}


