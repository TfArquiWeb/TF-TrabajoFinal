import { Component, OnInit } from '@angular/core';
import { Experiencia } from './../../../model/experiencia';
import { MatTableDataSource } from '@angular/material/table';
import { ExperienciaService } from './../../../service/experiencia.service';

@Component({
  selector: 'app-experiencia-listar',
  templateUrl: './experiencia-listar.component.html',
  styleUrls: ['./experiencia-listar.component.css']
})  
export class ExperienciaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Experiencia> = new MatTableDataSource();
  displayedColumns:string[]=['idExperiencia','descExperiencia']
  constructor(private Es: ExperienciaService) { }

  ngOnInit(): void {
    this.Es.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
