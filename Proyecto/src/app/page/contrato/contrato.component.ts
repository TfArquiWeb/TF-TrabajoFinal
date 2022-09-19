import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/service/contador.service';
import { MatTableDataSource } from '@angular/material/table';
import { Contrato } from './../../model/contrato';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  dataSource: MatTableDataSource<Contrato> = new MatTableDataSource();
  displayedColumns: string[] = ['idContrato','numeroContrato', 'fechainiContrato' ,'fechafinContrato', 'Contador', 'Empresario'];
  constructor(private Vs: ContadorService) { }

  ngOnInit(): void {
    this.Vs.getlistarContrato().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    }

}
