import { ContratoDialogComponent } from './contrato-dialog/contrato-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContratoService } from './../../../service/contrato.service';
import { Contrato } from './../../../model/contrato';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-listar',
  templateUrl: './contrato-listar.component.html',
  styleUrls: ['./contrato-listar.component.css']
})
export class ContratoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Contrato> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fechainicio', 'fechafin', 'vigencia', 'monto', 'idcontador', 'idempresario', 'tipomoneda', 'tipopago','curriculumvitae','accion1','accion2'];
  listacontrato:Contrato[]=[];
  private idMayor:number=0;
  constructor(private Cs: ContratoService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Cs.listarContrato().subscribe(data => {
      console.log(data)
      this.listacontrato=data;
      this.dataSource= new MatTableDataSource(data);
    });
    this.Cs.getListaContrato().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.Cs.getConfirmaEliminacionContrato().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirmarContrato(id:number){
    this.idMayor=id;
    this.dialog.open(ContratoDialogComponent);
  }
  eliminar(id:number){
    this.Cs.eliminarContrato(id).subscribe(()=>{
      this.Cs.listarContrato().subscribe(data=>{
        this.Cs.setListaContrato(data);
      });
    });
  }
}
