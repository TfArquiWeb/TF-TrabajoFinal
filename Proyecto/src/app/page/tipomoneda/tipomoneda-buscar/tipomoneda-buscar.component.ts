import { Component, OnInit } from '@angular/core';
import { TipomonedaService } from './../../../service/tipomoneda.service';
import { TipoMoneda } from './../../../model/tipomoneda';

@Component({
  selector: 'app-tipomoneda-buscar',
  templateUrl: './tipomoneda-buscar.component.html',
  styleUrls: ['./tipomoneda-buscar.component.css']
})
export class TipomonedaBuscarComponent implements OnInit {

  constructor(private tipomonedaService: TipomonedaService) { }

  ngOnInit(): void {
  }
  buscarTipoMoneda(e: any) {
    let array: TipoMoneda[] = [];
    this.tipomonedaService.listarTipoMoneda().subscribe(data => {
      data.forEach((element, index) => {
        if (element.Tipo.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tipomonedaService.setListaTipoMoneda(array);
    })
  }

}