import { TipopagoService } from './../../../service/tipopago.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TipoPago } from 'src/app/model/tipopago';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipopago-listar',
  templateUrl: './tipopago-listar.component.html',
  styleUrls: ['./tipopago-listar.component.css']
})
export class TipopagoListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipodepago'];
  constructor(private TPs: TipopagoService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.TPs.listarTipoPago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }) 
  }

}
