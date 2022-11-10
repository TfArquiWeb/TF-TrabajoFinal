import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContadorService } from './../../../service/contador.service';
import { Contador } from 'src/app/model/contador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-creadita',
  templateUrl: './contador-creadita.component.html',
  styleUrls: ['./contador-creadita.component.css']
})
export class ContadorCreaditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  listaUsuario:Usuario[]=[];
  idUsuarioSeleccionado:number=0;
  mensaje: string = "";
  mensaje1: string = "";
  contador: Contador = new Contador();
  
  constructor(private contadorservice: ContadorService, private router: Router,
    private route: ActivatedRoute, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usuarioService.listarUsuario().subscribe(data => { this.listaUsuario = data });
  }
  aceptar(): void {
    if (this.contador.descContador.length > 0 && this.contador.linkedinContador.length > 0) {
      let c=new Usuario();
      c.id= this.idUsuarioSeleccionado
      this.contador.usuario=c;
      if(this.edicion){
        this.contadorservice.modificarContador(this.contador).subscribe(() => {
          this.contadorservice.listarContador().subscribe(data => {
            this.contadorservice.setlistaContador(data);
          })
        });
      }else{
        this.contadorservice.insertarContador(this.contador).subscribe(() => {
          this.contadorservice.listarContador().subscribe(data => {
            this.contadorservice.setlistaContador(data);
          });
        }, err => {
          console.log(err);
        });
      }
      this.router.navigate(['contador']);
    } else{
      this.mensaje="Completar los datos";
    }
  }

  init() {
    if (this.edicion) {
      this.contadorservice.listarIdContador(this.id).subscribe(data => {
        this.contador = data
        console.log(data);
        this.idUsuarioSeleccionado = data.usuario.id;
      });

    }

  }
}
