import { CvService } from './../../../service/cv.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { RespuestaCu } from 'src/app/model/respuestaCu';

@Component({
  selector: 'app-cv-cantidad',
  templateUrl: './cv-cantidad.component.html',
  styleUrls: ['./cv-cantidad.component.css']
})
export class CvCantidadComponent implements OnInit {
  lista:RespuestaCu[]=[];
  dataSource: MatTableDataSource<RespuestaCu> = new MatTableDataSource();
  displayedColumns: string[] = ['capacitacion', 'cantidad'];
  constructor(private cvService:CvService) { }
 
  ngOnInit(): void {
    this.cvService.buscarCurriculumCantidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

} 