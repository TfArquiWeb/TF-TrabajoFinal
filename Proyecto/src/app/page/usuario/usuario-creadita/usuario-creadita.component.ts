import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-creadita',
  templateUrl: './usuario-creadita.component.html',
  styleUrls: ['./usuario-creadita.component.css']
})
export class UsuarioCreaditaComponent implements OnInit {
  usuario: Usuario = new Usuario();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private usuarioService:UsuarioService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptarUsuario(): void {
    if (this.usuario.apellidoUsuario.length > 0) {
      if (this.edicion) {
        this.usuarioService.modificarUsuario(this.usuario).subscribe(data => {
          this.usuarioService.listarUsuario().subscribe(data => {
            this.usuarioService.setListaUsuario(data);
          })
        })
      } else {

        this.usuarioService.insertarUsuario(this.usuario).subscribe(data => {
          this.usuarioService.listarUsuario().subscribe(data => {
            this.usuarioService.setListaUsuario(data);
          })
        })
      }
      this.router.navigate(['usuario']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.usuarioService.listarIdUsuario(this.id).subscribe(data => {
        this.usuario = data;
      })
    }

  }

  
}
