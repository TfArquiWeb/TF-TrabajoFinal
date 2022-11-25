import { ContadorService } from './../../../service/contador.service';
import { MatTableDataSource } from '@angular/material/table';
import { Contador } from './../../../model/contador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-ordenar',
  templateUrl: './contador-ordenar.component.html',
  styleUrls: ['./contador-ordenar.component.css']
})
export class ContadorOrdenarComponent implements OnInit {
  dataSource: MatTableDataSource<Contador> = new MatTableDataSource();
  displayedColumns: string[] = ['idContador','desc','linkedid','idUsuario','nombreUsuario'];
  constructor(private Cs: ContadorService) { }

  ngOnInit(): void {
    this.Cs.ordenarContadorDesenso().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
