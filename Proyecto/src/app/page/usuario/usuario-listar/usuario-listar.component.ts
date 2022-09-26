import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['idUsuario', 'dniUsuario', 'nombreUsuario', 'apellidoUsuario', 'numeroUsuario', 'correoUsuario', 'fotoUsuario', 'acciones1','acciones2'];
  private idMayor: number = 0;
  constructor(private Us: UsuarioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Us.listarUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Us.getListaUsuario().subscribe(data => {
       this.dataSource = new MatTableDataSource(data)
    });
    this.Us.getConfirmaEliminacionUsuario().subscribe(data => {
      data == true ? this.eliminarUsuario(this.idMayor) : false;
    });
  }
  eliminarUsuario(id: number) {
    this.Us.eliminarUsuario(id).subscribe(() => {
      this.Us.listarUsuario().subscribe(data => {
        this.Us.setListaUsuario(data);
      });
    });
  }
  confirmarUsuario(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
}
