import { HabilidadDialogoComponent } from './habilidad-dialogo/habilidad-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Habilidad } from './../../../model/habilidad';
import { HabilidadService } from './../../../service/habilidad.service';

@Component({
  selector: 'app-habilidad-listar',
  templateUrl: './habilidad-listar.component.html',
  styleUrls: ['./habilidad-listar.component.css']
})
export class HabilidadListarComponent implements OnInit {
  dataSource: MatTableDataSource<Habilidad> = new MatTableDataSource();
  displayedColumns:string[]=['idHabilidad','descHabilidad','accion1','accion2']
  private idMayor: number = 0;
  constructor(private Hs: HabilidadService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Hs.listarHabilidad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Hs.getListaHabilidad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  confirmarHabilidad(id: number) {
    this.idMayor = id;
    this.dialog.open(HabilidadDialogoComponent);
  } 
  eliminarHabilidad(id: number) {
    this.Hs.eliminarHabilidad(id).subscribe(() => {
      this.Hs.listarHabilidad().subscribe(data => {
        this.Hs.setListaHabilidad(data);/* se ejecuta la línea 27*/
      });
    });

  }

}

