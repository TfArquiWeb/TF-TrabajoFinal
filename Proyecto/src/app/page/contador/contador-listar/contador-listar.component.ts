import { ContadorService } from '../../../service/contador.service';
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
  displayedColumns: string[] = ['id','dni','nombre','apellido','numero','correo','foto','desc','linkedid'];
  constructor(private Cs: ContadorService) { }

  ngOnInit(): void {
    this.Cs.listarContador().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }) 
  }

}
