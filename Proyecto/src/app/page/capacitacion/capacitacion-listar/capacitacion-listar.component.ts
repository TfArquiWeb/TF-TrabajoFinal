import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Capacitacion } from './../../../model/capacitacion';
import { CapacitacionService } from './../../../service/capacitacion.service';
import { MatDialog } from '@angular/material/dialog';
import { CapacitacionDialogoComponent } from './capacitacion-dialogo/capacitacion-dialogo.component';
@Component({
  selector: 'app-capacitacion-listar',
  templateUrl: './capacitacion-listar.component.html',
  styleUrls: ['./capacitacion-listar.component.css']
})
export class CapacitacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Capacitacion> = new MatTableDataSource();
  displayedColumns:string[]=['idCapacitacion','descCapacitacion','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private Cs: CapacitacionService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Cs.listarCapacitacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Cs.getListaCapacitacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Cs.getConfirmaEliminacionCapacitacion().subscribe(data => {
      data == true ? this.eliminarCapacitacion(this.idMayor) : false;
    });
  }
  confirmarCapacitacion(id: number) {
    this.idMayor = id;
    this.dialog.open(CapacitacionDialogoComponent);
  } 
  eliminarCapacitacion(id: number) {
    this.Cs.eliminarCapacitacion(id).subscribe(() => {
      this.Cs.listarCapacitacion().subscribe(data => {
        this.Cs.setListaCapacitacion(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
