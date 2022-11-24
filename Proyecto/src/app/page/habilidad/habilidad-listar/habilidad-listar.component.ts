import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Habilidad } from './../../../model/habilidad';
import { HabilidadService } from './../../../service/habilidad.service';
import { MatDialog } from '@angular/material/dialog';
import { HabilidadDialogoComponent } from './habilidad-dialogo/habilidad-dialogo.component';

@Component({
  selector: 'app-habilidad-listar',
  templateUrl: './habilidad-listar.component.html',
  styleUrls: ['./habilidad-listar.component.css']
})
export class HabilidadListarComponent implements OnInit {
  lista: Habilidad[] = [];
  dataSource: MatTableDataSource<Habilidad> = new MatTableDataSource();
  displayedColumns: string[] = ['idHabilidad', 'descHabilidad', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private Hs: HabilidadService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Hs.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    })
    this.Hs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Hs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(HabilidadDialogoComponent);
  }
  eliminar(id: number) {
    this.Hs.eliminar(id).subscribe(() => {
      this.Hs.listar().subscribe(data => {
        this.Hs.setLista(data);
      });
    });

  }

}
