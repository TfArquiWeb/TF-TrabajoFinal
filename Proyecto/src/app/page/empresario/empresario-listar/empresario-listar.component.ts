import { EmpresarioService } from './../../../service/empresario.service';
import { Component, OnInit } from '@angular/core';
import { Empresario } from 'src/app/model/empresario';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empresario-listar',
  templateUrl: './empresario-listar.component.html',
  styleUrls: ['./empresario-listar.component.css']
})
export class EmpresarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Empresario> = new MatTableDataSource();
  displayedColumns: string[] = ['id','dni','nombre','apellido','numero','correo','foto','razon','ruc','rubro','descripcion'];
  constructor(private Es: EmpresarioService) { }

  ngOnInit(): void {
    this.Es.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }) 
  }

}
