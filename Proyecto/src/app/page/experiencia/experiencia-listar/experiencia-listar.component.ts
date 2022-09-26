import { ExperienciaDialogoComponent } from './experiencia-dialogo/experiencia-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from './../../../model/experiencia';
import { MatTableDataSource } from '@angular/material/table';
import { ExperienciaService } from './../../../service/experiencia.service';
import { CapacitacionDialogoComponent } from '../../capacitacion/capacitacion-listar/capacitacion-dialogo/capacitacion-dialogo.component';

@Component({
  selector: 'app-experiencia-listar',
  templateUrl: './experiencia-listar.component.html',
  styleUrls: ['./experiencia-listar.component.css']
})
export class ExperienciaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Experiencia> = new MatTableDataSource();
  displayedColumns: string[] = ['idExperiencia', 'descExperiencia', 'accion1', 'accion2']
  private idMayor: number = 0;
  constructor(private Es: ExperienciaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Es.listarExperiencia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Es.getListaExperiencia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Es.getConfirmaEliminacionExperiencia().subscribe(data => {
      data == true ? this.eliminarExperiencia(this.idMayor) : false;
    });
  }
  confirmarExperiencia(id: number) {
    this.idMayor = id;
    this.dialog.open(ExperienciaDialogoComponent);
  }
  eliminarExperiencia(id: number) {
    this.Es.eliminarExperiencia(id).subscribe(() => {
      this.Es.listarExperiencia().subscribe(data => {
        this.Es.setListaExperiencia(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
