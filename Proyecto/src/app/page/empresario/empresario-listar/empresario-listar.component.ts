import { EmpresarioDialogoComponent } from './empresario-dialogo/empresario-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
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
  listaempresario: Empresario[] = [];
  dataSource: MatTableDataSource<Empresario> = new MatTableDataSource();
  displayedColumns: string[] = ['id','razon','ruc','rubro','descripcion','idUsuario','nombreUsuario','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private empresarioService: EmpresarioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.empresarioService.listarEmpresario().subscribe(data => {
      console.log(data)
      this.listaempresario = data;
      this.dataSource = new MatTableDataSource(data);
    });
    this.empresarioService.getListaEmpresario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.empresarioService.getConfirmaEliminacionEmpresario().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmarEmpresario(id: number) {
    this.idMayor = id;
    this.dialog.open(EmpresarioDialogoComponent);
  }
  eliminar(id: number) {
    this.empresarioService.eliminarEmpresario(id).subscribe(() => {
      this.empresarioService.listarEmpresario().subscribe(data => {
        this.empresarioService.setListaEmpresario(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
