import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Capacitacion } from './../../../model/capacitacion';
import { CapacitacionService } from './../../../service/capacitacion.service';

@Component({
  selector: 'app-capacitacion-listar',
  templateUrl: './capacitacion-listar.component.html',
  styleUrls: ['./capacitacion-listar.component.css']
})
export class CapacitacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Capacitacion> = new MatTableDataSource();
  displayedColumns:string[]=['idCapacitacion','descCapacitacion','acciones']
  constructor(private Cs: CapacitacionService) { }

  ngOnInit(): void {
    this.Cs.listarCapacitacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Cs.getListaCapacitacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
