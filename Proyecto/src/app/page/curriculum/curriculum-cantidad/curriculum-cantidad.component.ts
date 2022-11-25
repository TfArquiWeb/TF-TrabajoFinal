import { CurriculumService } from './../../../service/curriculum.service';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaCu } from './../../../model/respuestaCu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-cantidad',
  templateUrl: './curriculum-cantidad.component.html',
  styleUrls: ['./curriculum-cantidad.component.css']
})
export class CurriculumCantidadComponent implements OnInit {
  lista:RespuestaCu[]=[];
  dataSource: MatTableDataSource<RespuestaCu> = new MatTableDataSource();
  displayedColumns: string[] = ['curriculum', 'cantidad'];
  constructor(private curriculumService:CurriculumService) { }
 
  ngOnInit(): void {
    this.curriculumService.buscarCurriculumCantidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}