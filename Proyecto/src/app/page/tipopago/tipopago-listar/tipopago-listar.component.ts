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
  displayedColumns: string[] = ['id', 'tipodepago', 'accion1','accion2'];
  private idMayor: number = 0;
  constructor(private TPs: TipopagoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.TPs.listarTipopago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.TPs.getListaTipopago().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.TPs.getConfirmaEliminacionTipopago().subscribe(data => {
      data == true ? this.eliminarTipopago(this.idMayor) : false;
    });
  }
  confirmarTipopago(id: number) {
    this.idMayor = id;
    this.dialog.open(TipopagoDialogoComponent);
  } 
  eliminarTipopago(id: number) {
    this.TPs.eliminarTipopago(id).subscribe(() => {
      this.TPs.listarTipopago().subscribe(data => {
        this.TPs.setListaTipopago(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
