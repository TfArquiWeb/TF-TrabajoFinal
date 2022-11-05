import { TipoPago } from './../../../model/tipopago';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipopagoService } from 'src/app/service/tipopago.service';

@Component({
  selector: 'app-tipopago-creaedita',
  templateUrl: './tipopago-creaedita.component.html',
  styleUrls: ['./tipopago-creaedita.component.css']
})
export class TipopagoCreaeditaComponent implements OnInit {
  tipopago: TipoPago = new TipoPago();
  mensaje: string = "";
  edicion: boolean =false;
  id: number = 0;
  constructor(private tipopagoservice:TipopagoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptarTipoPago(): void {
    if (this.tipopago.TipodePago.length > 0) {
      if (this.edicion) {
        this.tipopagoservice.modificarTipoPago(this.tipopago).subscribe(data =>{
          this.tipopagoservice.listarTipoPago().subscribe(data =>{
            this.tipopagoservice.setListaTipoPago(data);
          })
        })
      } else {
        this.tipopagoservice.insertarTipoPago(this.tipopago).subscribe(data => {
          this.tipopagoservice.listarTipoPago().subscribe(data => {
            this.tipopagoservice.setListaTipoPago(data);
          })
        })
      }
      
      this.router.navigate(['tipopago'])
    } else {
      this.mensaje="Ingresa el tipo de pago a cancelar";
    }

  }
  init() {
    if (this.edicion) {
      this.tipopagoservice.listarIdTipoPago(this.id).subscribe(data => {
        this.tipopago =data;
      })
    }

  }
}
