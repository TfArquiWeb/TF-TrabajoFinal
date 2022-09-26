import { TipoPago } from './../../../model/tipopago';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipopagoService } from 'src/app/service/tipopago.service';

@Component({
  selector: 'app-tipopago-creaedita',
  templateUrl: './tipopago-creaedita.component.html',
  styleUrls: ['./tipopago-creaedita.component.css']
})
export class TipopagoCreaeditaComponent implements OnInit {
  tipopago: TipoPago = new TipoPago();
  mensaje: string = "";
  edicionTP: boolean =false;
  idTP: number = 0;

  constructor(private tipopagoservice:TipopagoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.idTP = data['id'];
      this.edicionTP = data['id']= !null;
      this.init();
    });
  }
  aceptarTipopago(): void {
    if (this.tipopago.TipodePago.length > 0) {
      if (this.edicionTP) {
        this.tipopagoservice.modificarTipopago(this.tipopago).subscribe(data => {
          this.tipopagoservice.listarTipopago().subscribe(data => {
            this.tipopagoservice.setListaTipopago(data);
          })
        })
      } else {
        this.tipopagoservice.insertarTipopago(this.tipopago).subscribe(data => {
          this.tipopagoservice.listarTipopago().subscribe(data => {
            this.tipopagoservice.setListaTipopago(data);
          })
        })
      }

      this.router.navigate(['tipopago'])
    } else {
      this.mensaje="Complete los valores requeridos";
    }

  }
  init() {
    if (this.edicionTP) {
      this.tipopagoservice.listarIdTipopago(this.idTP).subscribe(data => {
        this.tipopago = data;
      })
    }

  }
}
