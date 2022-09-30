import { TipopagoService } from './../../../service/tipopago.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TipoPago } from 'src/app/model/tipopago';

@Component({
  selector: 'app-tipopago-listar',
  templateUrl: './tipopago-listar.component.html',
  styleUrls: ['./tipopago-listar.component.css']
})
export class TipopagoListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipodepago', 'acciones','accion2'];
  private idMayor: number = 0;
  constructor(private TPs: TipopagoService) { }

  ngOnInit(): void {
    this.TPs.listarTipopago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.TPs.getListaTipopago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
