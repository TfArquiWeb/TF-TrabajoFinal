import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoMoneda } from './../../../model/tipomoneda';
import { TipomonedaService } from './../../../service/tipomoneda.service';
import { MatDialog } from '@angular/material/dialog';
import { TipomonedaDialogoComponent } from './tipomoneda-dialogo/tipomoneda-dialogo.component';

@Component({
  selector: 'app-tipomoneda-listar',
  templateUrl: './tipomoneda-listar.component.html',
  styleUrls: ['./tipomoneda-listar.component.css']
})
export class TipomonedaListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoMoneda> = new MatTableDataSource();
  displayedColumns:string[]=['id','tipodemoneda','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private TMs: TipomonedaService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.TMs.listarTipoMoneda().subscribe(data => {
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
      this.TMs.listarTipoMoneda().subscribe(data => {
        this.TMs.setListaTipoMoneda(data);
      });
    });

  }

}
