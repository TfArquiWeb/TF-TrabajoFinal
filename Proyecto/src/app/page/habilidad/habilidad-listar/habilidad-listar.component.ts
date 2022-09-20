import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Habilidad } from './../../../model/habilidad';
import { HabilidadService } from './../../../service/habilidad.service';

@Component({
  selector: 'app-habilidad-listar',
  templateUrl: './habilidad-listar.component.html',
  styleUrls: ['./habilidad-listar.component.css']
})
export class HabilidadListarComponent implements OnInit {
  dataSource: MatTableDataSource<Habilidad> = new MatTableDataSource();
  displayedColumns:string[]=['idHabilidad','descHabilidad']
  constructor(private Hs: HabilidadService) { }

  ngOnInit(): void {
    this.Hs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
