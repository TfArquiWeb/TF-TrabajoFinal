import { ContadorService } from 'src/app/service/contador.service';
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
  constructor(private ps: ContadorService) { }

  ngOnInit(): void {
    this.ps.getlistarEmpresario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
