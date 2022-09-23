import { Router } from '@angular/router';
import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { SolicitudEmpleo } from './../../../model/solicitudempleo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-creadita',
  templateUrl: './solicitudempleo-creadita.component.html',
  styleUrls: ['./solicitudempleo-creadita.component.css']
})
export class SolicitudempleoCreaditaComponent implements OnInit {
  solicitudempleo: SolicitudEmpleo = new SolicitudEmpleo();
  mensaje: string = "";
  constructor(private solicitudempleoService: SolicitudempleoService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.solicitudempleo.fechaSE.length > 0 && this.solicitudempleo.estadoSE.length > 0) {
      this.solicitudempleoService.insertar(this.solicitudempleo).subscribe(data=>{
        this.solicitudempleoService.listar().subscribe(data=>{
          this.solicitudempleoService.setlistarsolicitud(data);
        })
      })
      this.router.navigate(['solicitudempleo']);
    }else{
      this.mensaje="Llena los datos";
    }
  }

}
