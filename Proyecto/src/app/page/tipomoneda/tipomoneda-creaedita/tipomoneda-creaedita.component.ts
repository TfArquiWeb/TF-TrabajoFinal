import { Component, OnInit } from '@angular/core';
import { TipoMoneda } from './../../../model/tipomoneda';
import { TipomonedaService } from './../../../service/tipomoneda.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
  constructor(private tipomonedaService:TipomonedaService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
  });
  }
  aceptarTipoMoneda(): void {
    if (this.tipomoneda.Tipo.length > 0) {
      if (this.edicion) {
        this.tipomonedaService.modificarTipoMoneda(this.tipomoneda).subscribe(data => {
          this.tipomonedaService.listarTipoMoneda().subscribe(data => {
            this.tipomonedaService.setListaTipoMoneda(data);
          })
        })
      } else {
        this.tipomonedaService.insertarTipoMoneda(this.tipomoneda).subscribe(data => {
          this.tipomonedaService.listarTipoMoneda().subscribe(data => {
            this.tipomonedaService.setListaTipoMoneda(data);
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
      this.tipomonedaService.listarIdTipoMoneda(this.id).subscribe(data => {
        this.tipomoneda = data;
      })
    }

  }

}
