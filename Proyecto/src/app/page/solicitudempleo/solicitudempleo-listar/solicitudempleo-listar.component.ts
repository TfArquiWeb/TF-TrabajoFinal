import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { SolicitudEmpleo } from './../../../model/solicitudempleo';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-listar',
  templateUrl: './solicitudempleo-listar.component.html',
  styleUrls: ['./solicitudempleo-listar.component.css']
})
export class SolicitudempleoListarComponent implements OnInit {
  dataSource: MatTableDataSource<SolicitudEmpleo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'estado', 'idempresario', 'idcontador'];
  constructor(private SEs: SolicitudempleoService) { }

  ngOnInit(): void {
    this.SEs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.SEs.getlistasolicitud().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  } 

}
