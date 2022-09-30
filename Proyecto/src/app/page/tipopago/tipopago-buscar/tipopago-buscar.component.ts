import { TipoPago } from 'src/app/model/tipopago';
import { TipopagoService } from 'src/app/service/tipopago.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipopago-buscar',
  templateUrl: './tipopago-buscar.component.html',
  styleUrls: ['./tipopago-buscar.component.css']
})
export class TipopagoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tipopagoservice: TipopagoService ) { }

  ngOnInit(): void {
  }
  buscarTipopago(e: any) {
    let array: TipoPago[] = [];
    this.tipopagoservice.listarTipopago().subscribe(data => {
      data.forEach((element, index) => {
        if (element.TipodePago.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tipopagoservice.setListaTipopago(array);
    })
  }

}
