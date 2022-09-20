import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['id','dni','nombre','apellido','numero','correo','foto'];
  constructor(private Us: UsuarioService) { }

  ngOnInit(): void {
    this.Us.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
