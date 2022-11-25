import { CvDialogoComponent } from './cv-dialogo/cv-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { CvService } from './../../../service/cv.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/model/cv';

@Component({
  selector: 'app-cv-listar',
  templateUrl: './cv-listar.component.html',
  styleUrls: ['./cv-listar.component.css']
})
export class CvListarComponent implements OnInit {
  listacv: Cv[] = [];
  dataSource: MatTableDataSource<Cv> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'habilidad', 'capacitacion', 'experiencia', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private Cvser: CvService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Cvser.listar().subscribe(data => {
      console.log(data)
      this.listacv = data;
      this.dataSource = new MatTableDataSource(data);
    });
    this.Cvser.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.Cvser.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirmarCv(id: number) {
    this.idMayor = id;
    this.dialog.open(CvDialogoComponent);
  }
  eliminar(id: number) {
    this.Cvser.eliminar(id).subscribe(() => {
      this.Cvser.listar().subscribe(data => {
        this.Cvser.setLista(data);
      });
    });
  }
}

