import { CurriculumVitae } from './../../../model/curriculum';
import { CurriculumService } from './../../../service/curriculum.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-listar',
  templateUrl: './curriculum-listar.component.html',
  styleUrls: ['./curriculum-listar.component.css']
})
export class CurriculumListarComponent implements OnInit {
  dataSource: MatTableDataSource<CurriculumVitae> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'estado', 'idempresario', 'idcontador'];
  constructor(private Cs: CurriculumService) { }

  ngOnInit(): void {
    this.Cs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
