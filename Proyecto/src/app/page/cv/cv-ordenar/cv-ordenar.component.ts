import { Cv } from './../../../model/cv';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/service/cv.service';

@Component({
  selector: 'app-cv-ordenar',
  templateUrl: './cv-ordenar.component.html',
  styleUrls: ['./cv-ordenar.component.css']
})
export class CvOrdenarComponent implements OnInit {
  dataSource: MatTableDataSource<Cv> = new MatTableDataSource();
  displayedColumns: string[] = ['idcurriculum','capacitacion','experiencia','habilidad'];
  constructor(private Cu: CvService) { }

  ngOnInit(): void {
    this.Cu.ordenarCurriculumDesenso().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
 