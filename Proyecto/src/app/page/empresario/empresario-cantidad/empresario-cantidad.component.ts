import { EmpresarioService } from './../../../service/empresario.service';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaEMP } from './../../../model/respuestaemp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresario-cantidad',
  templateUrl: './empresario-cantidad.component.html',
  styleUrls: ['./empresario-cantidad.component.css']
})
export class EmpresarioCantidadComponent implements OnInit {
  lista:RespuestaEMP[]=[];
  dataSource: MatTableDataSource<RespuestaEMP> = new MatTableDataSource();
  displayedColumns: string[] = ['usuario', 'cantidad'];
  constructor(private empresarioservice:EmpresarioService) { }

  ngOnInit(): void {
    this.empresarioservice.buscarEmpresariosCantidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
