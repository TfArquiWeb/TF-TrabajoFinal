import { Router } from '@angular/router';
import { HabilidadService } from './../../../service/habilidad.service';
import { Habilidad } from './../../../model/habilidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidad-creaedita',
  templateUrl: './habilidad-creaedita.component.html',
  styleUrls: ['./habilidad-creaedita.component.css']
})
export class HabilidadCreaeditaComponent implements OnInit {
  habilidad:Habilidad=new Habilidad();
  mensaje: string="";
  constructor(private habilidadService: HabilidadService,private router: Router) { }
  ngOnInit(): void {}
  aceptarHabilidad(): void {
    if (this.habilidad.descHabilidad.length > 0 ) {
      this.habilidadService.insertarHabilidad(this.habilidad).subscribe(datahab => {
        this.habilidadService.listarHabilidad().subscribe(datahab => {
          this.habilidadService.setListaHabilidad(datahab);
        })
      })
      this.router.navigate(['habilidad']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
