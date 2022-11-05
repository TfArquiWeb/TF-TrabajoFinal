import { TipopagoDialogoComponent } from './tipopago-dialogo/tipopago-dialogo.component';
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
  displayedColumns: string[] = ['id', 'tipo', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private TPs: TipopagoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.TPs.listarTipoPago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.TPs.getListaTipoPago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.TPs.getConfirmaEliminacionTipoPago().subscribe(data => {
      data == true ? this.eliminarTipoPago(this.idMayor) : false;
    });
  }
  confirmarTipoPago(id: number) {
    this.idMayor = id;
    this.dialog.open(TipopagoDialogoComponent);
  } 
  eliminarTipoPago(id: number) {
    this.TPs.eliminarTipoPago(id).subscribe(() => {
      this.TPs.listarTipoPago().subscribe(data => {
        this.TPs.setListaTipoPago(data);
      });
    });

  }

}
