import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private capacitacionService: CapacitacionService, private router: Router) { }

  ngOnInit(): void {

  }
  aceptarCapacitacion(): void {
    if (this.capacitacion.descCapacitacion.length > 0) {

      this.capacitacionService.insertarCapacitacion(this.capacitacion).subscribe(data => {
        this.capacitacionService.listarCapacitacion().subscribe(data => {
          this.capacitacionService.setListaCapacitacion(data);
        })
      })
      this.router.navigate(['capacitacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


}
