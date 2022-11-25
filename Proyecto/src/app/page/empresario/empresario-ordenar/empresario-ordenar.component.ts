import { EmpresarioService } from './../../../service/empresario.service';
import { Empresario } from 'src/app/model/empresario';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresario-ordenar',
  templateUrl: './empresario-ordenar.component.html',
  styleUrls: ['./empresario-ordenar.component.css']
})
export class EmpresarioOrdenarComponent implements OnInit {
  dataSource: MatTableDataSource<Empresario> = new MatTableDataSource();
  displayedColumns: string[] = ['id','razon','ruc','rubro','descripcion','idUsuario','nombreUsuario'];
  constructor(private Es: EmpresarioService) { }

  ngOnInit(): void {
    this.Es.ordenarEmpresarioDesenso().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
