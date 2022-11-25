import { SolicitudempleoDialogoComponent } from './solicitudempleo-dialogo/solicitudempleo-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudEmpleo } from './../../../model/solicitudempleo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-listar',
  templateUrl: './solicitudempleo-listar.component.html',
  styleUrls: ['./solicitudempleo-listar.component.css']
})
export class SolicitudempleoListarComponent implements OnInit {
  listarse: SolicitudEmpleo[]=[];
  dataSource: MatTableDataSource<SolicitudEmpleo> = new MatTableDataSource();
  displayecColums: string[]=['idSE','fechaSE','estadoSE','contadoridSE','contadorSE','accion1','accion2']// Falta insertar cuantas columnas tendre
  private idMayor: number = 0;
  constructor(private SeS: SolicitudempleoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.SeS.listarSolicitud().subscribe(data =>{
      console.log(data)
      this.listarse= data;
      this.dataSource= new MatTableDataSource(data);
    });
    this.SeS.getlistaSolicitud().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

    });
    this.SeS.getConfirmaEliminacionSolicitud().subscribe(data=>{
      data == true ? this.eliminarse(this.idMayor) :false;
    })
  }
  confirmarSE(id: number){
    this.idMayor =id;
    this.dialog.open(SolicitudempleoDialogoComponent);
  }
  eliminarse(id: number){
    this.SeS.eliminarSolicitud(id).subscribe(()=> {
      this.SeS.listarSolicitud().subscribe(data => {
        this.SeS.setlistarSolicitud(data);
      })
    })
  }

}
