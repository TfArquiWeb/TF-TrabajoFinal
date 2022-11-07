import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SolicitudempleoService } from 'src/app/service/solicitudempleo.service';
import { Usuario } from 'src/app/model/usuario';
import { SolicitudEmpleo } from 'src/app/model/solicitudempleo';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-solicitudempleo-creadita',
  templateUrl: './solicitudempleo-creadita.component.html',
  styleUrls: ['./solicitudempleo-creadita.component.css']
})
export class SolicitudempleoCreaditaComponent implements OnInit {
  solicitudempleo: SolicitudEmpleo= new SolicitudEmpleo();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;

  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";

  constructor(private solicitudempleoService: SolicitudempleoService,
    private route: ActivatedRoute,
    private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listarUsuario().subscribe(data => { this.listaUsuarios = data });
  }

  aceptar() {
    if (this.solicitudempleo.idSE > 0 &&
      this.idUsuarioSeleccionado>0) {
      let p = new Usuario();
      p.id = this.idUsuarioSeleccionado;
      this.solicitudempleo.Usuario = p;
      this.solicitudempleo.fechaSE = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.solicitudempleoService.modificarSolicitud(this.solicitudempleo).subscribe(() => {
          this.solicitudempleoService.listarSolicitud().subscribe(data => {
            this.solicitudempleoService.setlistarSolicitud(data);
          });
        });

      } else {
        this.solicitudempleoService.insertarSolicitud(this.solicitudempleo).subscribe(() => {
          this.solicitudempleoService.listarSolicitud().subscribe(data => {
            this.solicitudempleoService.setlistarSolicitud(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['vehiculos']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.solicitudempleoService.listarIdSolicitud(this.id).subscribe(data => {
        this.solicitudempleo = data
        console.log(data);
        this.idUsuarioSeleccionado = data.Usuario.id;
      });

    }

  }

}
