import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { SolicitudEmpleo } from './../../../model/solicitudempleo';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-ordenar',
  templateUrl: './solicitudempleo-ordenar.component.html',
  styleUrls: ['./solicitudempleo-ordenar.component.css']
})
export class SolicitudempleoOrdenarComponent implements OnInit {
  dataSource: MatTableDataSource<SolicitudEmpleo> = new MatTableDataSource();
  displayedColumns: string[] = []
  constructor(private Ses:SolicitudempleoService) { }

  ngOnInit(): void {
    this.Ses.ordenarSolici().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
