import { ContadorDialogoComponent } from './contador-dialogo/contador-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
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
  listacontador:Contador[]=[];
  dataSource: MatTableDataSource<Contador> = new MatTableDataSource();
  displayedColumns: string[] = ['idContador','desc','linkedid','idUsuario','nombreUsuario','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private Cs: ContadorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Cs.listarContador().subscribe(data => {
      console.log(data)
      this.listacontador=data;
      this.dataSource = new MatTableDataSource(data);
    }); 
    this.Cs.getlistaContador().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.Cs.getConfirmaEliminacionContador().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirmarContador(id: number) {
    this.idMayor = id;
    this.dialog.open(ContadorDialogoComponent);
  }
  eliminar(id: number) {
    this.Cs.eliminarContador(id).subscribe(() => {
      this.Cs.listarContador().subscribe(data => {
        this.Cs.setlistaContador(data);
      });
    });
  }
}
