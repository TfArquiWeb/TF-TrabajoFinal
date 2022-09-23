import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-listar',
  templateUrl: './solicitudempleo-listar.component.html',
  styleUrls: ['./solicitudempleo-listar.component.css']
})
export class SolicitudempleoListarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    this.SEs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.SEs.getlistasolicitud().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  } 

}
