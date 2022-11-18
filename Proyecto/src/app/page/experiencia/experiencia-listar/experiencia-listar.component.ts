import { Component, OnInit } from '@angular/core';
import { Experiencia } from './../../../model/experiencia';
import { MatTableDataSource } from '@angular/material/table';
import { ExperienciaService } from './../../../service/experiencia.service';
import { ExperienciaDialogoComponent } from './experiencia-dialogo/experiencia-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-experiencia-listar',
  templateUrl: './experiencia-listar.component.html',
  styleUrls: ['./experiencia-listar.component.css']
})  
export class ExperienciaListarComponent implements OnInit {
  lista: Experiencia[] = [];
  dataSource: MatTableDataSource<Experiencia> = new MatTableDataSource();
  displayedColumns:string[]=['idExperiencia','descExperiencia','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private Es: ExperienciaService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Es.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    })
    this.Es.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Es.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(ExperienciaDialogoComponent);
    } 
    eliminar(id: number) {
      this.Es.eliminar(id).subscribe(() => {
        this.Es.listar().subscribe(data => {
          this.Es.setLista(data);
        });
      });
  
    }
  
  }
