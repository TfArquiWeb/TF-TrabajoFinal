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
  aceptar(): void {
    if (this.capacitacion.descCapacitacion.length > 0) {
      if (this.edicion) {
        this.capacitacionService.modificar(this.capacitacion).subscribe(data => {
          this.capacitacionService.listar().subscribe(data => {
            this.capacitacionService.setLista(data);
          })
        })
      } else {
        this.capacitacionService.registrar(this.capacitacion).subscribe(data => {
          this.capacitacionService.listar().subscribe(data => {
            this.capacitacionService.setLista(data);
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
      this.capacitacionService.listarId(this.id).subscribe(data => {
        this.capacitacion = data;
      })
    }
  }
}
