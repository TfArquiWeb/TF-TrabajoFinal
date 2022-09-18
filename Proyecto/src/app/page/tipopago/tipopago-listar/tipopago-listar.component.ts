import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TipoPago } from 'src/app/model/tipopago';
import { ContadorService } from 'src/app/service/contador.service';

@Component({
  selector: 'app-tipopago-listar',
  templateUrl: './tipopago-listar.component.html',
  styleUrls: ['./tipopago-listar.component.css']
})
export class TipopagoListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoPago>=new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipodepago'];
  constructor(private Vs:ContadorService) { }

  ngOnInit(): void {
    this.Vs.listarTipoPago().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
