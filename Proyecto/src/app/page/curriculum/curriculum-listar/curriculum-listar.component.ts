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
  dataSource: MatTableDataSource<curriculum> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'habilidad', 'capacitacion','experiencia'];
  constructor(private CVs: CurriculumService) { }

  ngOnInit(): void {
    this.CVs.listarCurriculum().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.CVs.getListaCurriculum().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
