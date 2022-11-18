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
  lista: Capacitacion[] = [];
  dataSource: MatTableDataSource<Capacitacion> = new MatTableDataSource();
  displayedColumns: string[] = ['idCapacitacion', 'descCapacitacion', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private Cs: CapacitacionService,
    private dialog: MatDialog) { 

    }

  ngOnInit(): void {
    this.Cs.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    })
    this.Cs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.Cs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CapacitacionDialogoComponent);
  }
  eliminar(id: number) {
    this.Cs.eliminar(id).subscribe(() => {
      this.Cs.listar().subscribe(data => {
        this.Cs.setLista(data);
      });
    });
  }
  //filtrar(e: any) {
  //  this.dataSource.filter = e.target.value.trim();
  //}
}
