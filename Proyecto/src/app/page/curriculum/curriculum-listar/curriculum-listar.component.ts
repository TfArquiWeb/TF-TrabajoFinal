import { CurriculumDialogoComponent } from './curriculum-dialogo/curriculum-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { curriculum } from '../../../model/curriculum';
import { CurriculumService } from './../../../service/curriculum.service';

@Component({
  selector: 'app-curriculum-listar',
  templateUrl: './curriculum-listar.component.html',
  styleUrls: ['./curriculum-listar.component.css']
}) 
export class CurriculumListarComponent implements OnInit {
  lista: curriculum[] = [];
  dataSource: MatTableDataSource<curriculum> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'habilidad', 'capacitacion', 'experiencia', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private CVs: CurriculumService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.CVs.listar().subscribe(data => {
      console.log(data);
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    })
    this.CVs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

    this.CVs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmarCurriculum(id: number) {
    this.idMayor = id;
    this.dialog.open(CurriculumDialogoComponent);
  }
  eliminar(id: number) {
    this.CVs.eliminar(id).subscribe(() => {
      this.CVs.listar().subscribe(data => {
        this.CVs.setLista(data);
      });
    });
  }
}
  