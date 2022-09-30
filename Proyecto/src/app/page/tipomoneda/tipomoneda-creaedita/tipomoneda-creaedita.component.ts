import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipomonedaService } from 'src/app/service/tipomoneda.service';
import { TipoMoneda } from './../../../model/tipomoneda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipomoneda-creaedita',
  templateUrl: './tipomoneda-creaedita.component.html',
  styleUrls: ['./tipomoneda-creaedita.component.css']
})
export class TipomonedaCreaeditaComponent implements OnInit {
  tipomoneda: TipoMoneda = new TipoMoneda();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private tPs: TipomonedaService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']
      this.edicion = data['id'] != null;

    })
  }
  aceptarTipoMoneda() {
    if (this.tipomoneda.TipodeMoneda.length > 0) {
      if (this.edicion) {
        this.tPs.insertarTipoMoneda(this.tipomoneda).subscribe(data => {
          this.tPs.listarMoneda().subscribe(data => {
            this.tPs.setListaTipoMoneda(data);
          })
        })
      } else {
        this.tPs.insertarTipoMoneda(this.tipomoneda).subscribe(data => {
          this.tPs.listarMoneda().subscribe(data => {
            this.tPs.setListaTipoMoneda(data);
          })
        })
      }
      this.router.navigate(['tipomoneda']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.tPs.listarIdTipoMoneda(this.id).subscribe(data => {
        this.tipomoneda = data;
      })
    }
  }
}
