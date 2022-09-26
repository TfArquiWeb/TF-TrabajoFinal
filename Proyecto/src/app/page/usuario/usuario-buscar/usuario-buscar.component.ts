import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private Us: UsuarioService) { }

  ngOnInit(): void {
  }
  buscarUsuario(e: any) {
    let array: Usuario[] = [];
    this.Us.listarUsuario().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreUsuario.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.Us.setListaUsuario(array);
    })
  }
}
