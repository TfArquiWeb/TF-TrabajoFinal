import { TipoPago } from './../../../model/tipopago';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipopagoService } from 'src/app/service/tipopago.service';

@Component({
  selector: 'app-tipopago-creaedita',
  templateUrl: './tipopago-creaedita.component.html',
  styleUrls: ['./tipopago-creaedita.component.css']
})
export class TipopagoCreaeditaComponent implements OnInit {
  tipopago: TipoPago = new TipoPago();
  mensaje: string = "";

  constructor(private tipopagoservice:TipopagoService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.tipopago.TipodePago.length > 0) {
      this.tipopagoservice.insertarTipoPago(this.tipopago).subscribe(data => {
        this.tipopagoservice.listarTipoPago().subscribe(data => {
          this.tipopagoservice.setListaTipoPago(data);
        })
      })
      this.router.navigate(['tipopago'])
    } else {
      this.mensaje="Ingresa el tipo de pago a cancelar";
    }

  }

}
