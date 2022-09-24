import { Router, ActivatedRoute, Params } from '@angular/router';
import { HabilidadService } from './../../../service/habilidad.service';
import { Habilidad } from './../../../model/habilidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidad-creaedita',
  templateUrl: './habilidad-creaedita.component.html',
  styleUrls: ['./habilidad-creaedita.component.css']
})
export class HabilidadCreaeditaComponent implements OnInit {
  habilidad: Habilidad = new Habilidad();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private habilidadService: HabilidadService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptarHabilidad(): void {
    if (this.habilidad.descHabilidad.length > 0) {
      if (this.edicion) {
        this.habilidadService.modificarHabilidad(this.habilidad).subscribe(data => {
          this.habilidadService.listarHabilidad().subscribe(data => {
            this.habilidadService.setListaHabilidad(data);
          })
        })
      } else {

        this.habilidadService.insertarHabilidad(this.habilidad).subscribe(data => {
          this.habilidadService.listarHabilidad().subscribe(data => {
            this.habilidadService.setListaHabilidad(data);
          })
        })
      }
      this.router.navigate(['habilidad']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.habilidadService.listarIdHabilidad(this.id).subscribe(data => {
        this.habilidad = data;
      })
    }

  }

}
