import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../../model/usuario';
import { UsuarioService } from './../../../service/usuario.service';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  buscarUsuario(e: any) {
    let array: Usuario[] = [];
    this.usuarioService.listarUsuario().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreUsuario.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.usuarioService.setListaUsuario(array);
    })
  }

}