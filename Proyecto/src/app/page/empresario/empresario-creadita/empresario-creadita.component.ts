import { UsuarioService } from './../../../service/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpresarioService } from './../../../service/empresario.service';
import { Empresario } from 'src/app/model/empresario';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-empresario-creadita',
  templateUrl: './empresario-creadita.component.html',
  styleUrls: ['./empresario-creadita.component.css']
})
export class EmpresarioCreaditaComponent implements OnInit {
  empresario: Empresario = new Empresario();
  mensaje:string ="";
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  mensaje1: string = "";
  idUsuarioSeleccionado: number = 0;
  constructor(private empresarioService: EmpresarioService,
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
    aceptar(): void {
      if (this.empresario.descEmpresario.length > 0 && this.empresario.rubroEmpresario.length > 0) {
        let c=new Usuario();
        c.id= this.idUsuarioSeleccionado
        this.empresario.usuario=c;
        if(this.edicion){
          this.empresarioService.modificarEmpresario(this.empresario).subscribe(() => {
            this.empresarioService.listarEmpresario().subscribe(data => {
              this.empresarioService.setListaEmpresario(data);
            })
          });
        }else{
          this.empresarioService.insertarEmpresario(this.empresario).subscribe(() => {
            this.empresarioService.listarEmpresario().subscribe(data => {
              this.empresarioService.setListaEmpresario(data);
            });
          }, err => {
            console.log(err);
          });
        }
        this.router.navigate(['empresario']);
      } else{
        this.mensaje="Completar los datos";
      }
    }
  
    init() {
      if (this.edicion) {
        this.empresarioService.listarIdEmpresario(this.id).subscribe(data => {
          this.empresario = data
          console.log(data);
          this.idUsuarioSeleccionado = data.usuario.id;
        });
  
      }
  
    }
  }
  