import { TipoMoneda } from './../../../model/tipomoneda';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { TipomonedaService } from 'src/app/service/tipomoneda.service';

@Component({
  selector: 'app-tipomoneda-listar',
  templateUrl: './tipomoneda-listar.component.html',
  styleUrls: ['./tipomoneda-listar.component.css']
})
export class TipomonedaListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoMoneda> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipomoneda'];
  constructor(private TMs: TipomonedaService) { }

  ngOnInit(): void {
    this.TMs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }) 
  }

}
