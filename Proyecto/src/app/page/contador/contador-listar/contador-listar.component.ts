import { ContadorService } from './../../../service/contador.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Contador } from 'src/app/model/contador';

@Component({
  selector: 'app-contador-listar',
  templateUrl: './contador-listar.component.html',
  styleUrls: ['./contador-listar.component.css']
})
export class ContadorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Contador> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','apellido','email','dni','numero','foto','empresario']
  constructor(private Vs: ContadorService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
