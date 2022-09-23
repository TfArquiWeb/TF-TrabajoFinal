import { ContratoService } from './../../../service/contrato.service';
import { Contrato } from './../../../model/contrato';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-listar',
  templateUrl: './contrato-listar.component.html',
  styleUrls: ['./contrato-listar.component.css']
})
export class ContratoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Contrato> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fechainicio', 'fechafin', 'vigencia', 'monto', 'idcontador', 'idempresario', 'tipomoneda', 'tipopago','curriculumvitae'];
  constructor(private Cs: ContratoService) { }

  ngOnInit(): void {
    this.Cs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Cs.getLista().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
