import { ContadorService } from '../../../service/contador.service';
import { CurriculumVitae } from './../../../model/Curriculum';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-listar',
  templateUrl: './curriculum-listar.component.html',
  styleUrls: ['./curriculum-listar.component.css']
})
export class CurriculumListarComponent implements OnInit {
  dataSource:MatTableDataSource<CurriculumVitae>=new MatTableDataSource();
  displayedColumns:string[]=['experiencias','capacidades','habilidades','idcontador']
  constructor(private Vs:ContadorService) { }

  ngOnInit(): void {
    this.Vs.getlistarCurriculum().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
