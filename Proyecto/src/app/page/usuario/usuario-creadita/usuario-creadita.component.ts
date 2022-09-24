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
  constructor(private uSe:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar():void{
    if (this.usuario.dniUsuario > 0 && this.usuario.nombreUsuario.length > 0&& this.usuario.apellidoUsuario.length > 0&& this.usuario.numeroUsuario> 0&& this.usuario.correoUsuario.length > 0&& this.usuario.fotoUsuario.length > 0) {

      if (this.edicion) {
        this.uSe.modificarUsuaria(this.usuario).subscribe(data => {
          this.uSe.listarUsuario().subscribe(data => {
            this.uSe.setListaUsuario(data);
          })

      this.uSe.insertar(this.usuario).subscribe(data => {
        this.uSe.listarUsuario().subscribe(data => {
          this.uSe.setListaUsuario(data);
        })
      }
      else {
        this.uSe.insertarUsuario(this.usuario).subscribe(data => {
          this.uSe.listarUsuario().subscribe(data => {
            this.uSe.setListaUsuario(data);
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
      this.uSe.listaIdUsuario(this.id).subscribe(data => {
        this.usuario = data;
      })
    }

  }
}
