import { TipomonedaDialogoComponent } from './tipomoneda-dialogo/tipomoneda-dialogo.component';
import { TipoMoneda } from './../../../model/tipomoneda';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TipomonedaService } from 'src/app/service/tipomoneda.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipomoneda-listar',
  templateUrl: './tipomoneda-listar.component.html',
  styleUrls: ['./tipomoneda-listar.component.css']
})
export class TipomonedaListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoMoneda> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipomoneda'];
  private idMayor: number = 0;
  constructor(private TMs: TipomonedaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.TMs.listarMoneda().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.TMs.getListaTipoMoneda().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.TMs.getConfirmaEliminacionTipoMoneda().subscribe(data => {
      data == true ? this.eliminarTipoMoneda(this.idMayor) : false;
    });
  }
  confirmarTipoMoneda(id: number) {
    this.idMayor = id;
    this.dialog.open(TipomonedaDialogoComponent);
  }

  eliminarTipoMoneda(id: number) {
    this.TMs.eliminarTipoMoneda(id).subscribe(() => {
      this.TMs.listarMoneda().subscribe(data => {
        this.TMs.setListaTipoMoneda(data);
      });
    });
  }
}
