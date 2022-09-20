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
  capacitacion:Capacitacion=new Capacitacion();
  mensaje: string="";
  constructor(private capacitacionService: CapacitacionService,private router: Router) { }

  ngOnInit(): void {}
  aceptar(): void {
    if (this.capacitacion.idCapacitacion > 0 ) {

      this.capacitacionService.insertar(this.capacitacion).subscribe(data => {
        this.capacitacionService.listar().subscribe(data => {
          this.capacitacionService.setLista(data);
        })
      })
      this.router.navigate(['capacitaciones']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  

}
