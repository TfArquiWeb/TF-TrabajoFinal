import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SolicitudEmpleo } from 'src/app/model/solicitudempleo';
import { SolicitudempleoService } from 'src/app/service/solicitudempleo.service';

@Component({
  selector: 'app-solicitudempleo-listar',
  templateUrl: './solicitudempleo-listar.component.html',
  styleUrls: ['./solicitudempleo-listar.component.css']
})
export class SolicitudempleoListarComponent implements OnInit {
  lista: SolicitudEmpleo[]=[];
  dataSource: MatTableDataSource<SolicitudEmpleo>= new MatTableDataSource();
  displayedColumns: string[] = [ 'id', 'fecha', 'estado', 'contador', 'empresario', 'acciones' ]
  private idMayor: number = 0;

  constructor(private solicitudempleoService: SolicitudempleoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.solicitudempleoService.listarSolicitud().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.solicitudempleoService.getlistaSolicitud().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.solicitudempleoService.getConfirmaEliminacionSolicitud().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(SolicitudEmpleoDialogoComponent);//falta añadir
  }
  eliminar(id: number) {
    this.solicitudempleoService.eliminarSolicitud(id).subscribe(() => {
      this.solicitudempleoService.listarSolicitud().subscribe(data => {
        this.solicitudempleoService.setlistarSolicitud(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
