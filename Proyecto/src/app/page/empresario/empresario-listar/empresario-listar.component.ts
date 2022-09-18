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
  displayedColumns: string[] = ['id', 'name', "apellido", "email", "dni", "numero", "foto", "razon-social", "ruc", "rubro", "pref"];
  constructor(private ps: EmpresarioService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
