import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Capacitacion } from './../../../model/capacitacion';
import { CapacitacionService } from './../../../service/capacitacion.service';

@Component({
  selector: 'app-capacitacion-creaedita',
  templateUrl: './capacitacion-creaedita.component.html',
  styleUrls: ['./capacitacion-creaedita.component.css']
})
export class CapacitacionCreaeditaComponent implements OnInit {
  capacitacion: Capacitacion = new Capacitacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private capacitacionService: CapacitacionService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptarCapacitacion(): void {
    if (this.capacitacion.descCapacitacion.length > 0) {
      if (this.edicion) {
        this.capacitacionService.modificarCapacitacion(this.capacitacion).subscribe(data => {
          this.capacitacionService.listarCapacitacion().subscribe(data => {
            this.capacitacionService.setListaCapacitacion(data);
          })
        })
      } else {
        this.capacitacionService.insertarCapacitacion(this.capacitacion).subscribe(data => {
          this.capacitacionService.listarCapacitacion().subscribe(data => {
            this.capacitacionService.setListaCapacitacion(data);
          })
        })
      }
      this.router.navigate(['capacitacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.capacitacionService.listarIdCapacitacion(this.id).subscribe(data => {
        this.capacitacion = data;
      })
    }

  }

}
