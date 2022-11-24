import { ContadorService } from './../../../service/contador.service';
import { MatTableDataSource } from '@angular/material/table';
import { Respuesta } from './../../../model/respuesta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.css']
})
export class ContadorCantidadComponent implements OnInit {
  lista:Respuesta[]=[];
  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns: string[] = ['usuario', 'cantidad'];
  constructor(private contadorservice:ContadorService) { }

  ngOnInit(): void {
    this.contadorservice.buscarContadoresCantidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
