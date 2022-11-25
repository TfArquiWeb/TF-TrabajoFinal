import { CurriculumService } from './../../../service/curriculum.service';
import { curriculum } from '../../../model/curriculum';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-ordenar',
  templateUrl: './curriculum-ordenar.component.html',
  styleUrls: ['./curriculum-ordenar.component.css']
})
export class CurriculumOrdenarComponent implements OnInit {
  dataSource: MatTableDataSource<curriculum> = new MatTableDataSource();
  displayedColumns: string[] = ['idcurriculum','capacitacion','experiencia','habilidad'];
  constructor(private Cu: CurriculumService) { }

  ngOnInit(): void {
    this.Cu.ordenarCurriculumDesenso().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
 