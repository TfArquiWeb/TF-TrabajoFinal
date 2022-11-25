import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-buscar',
  templateUrl: './solicitudempleo-buscar.component.html',
  styleUrls: ['./solicitudempleo-buscar.component.css']
})
export class SolicitudempleoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private solicitudempleoservice: SolicitudempleoService){}

  ngOnInit(): void {
  }
  buscarSolicitudempleoDescripcion(se: any){
    this.solicitudempleoservice.buscarSolicitudNombre(se.target.value).subscribe(data=>{
      this.solicitudempleoservice.setlistarSolicitud(data);
    });
  }

}
