import { ContadorService } from './../../../service/contador.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SolicitudempleoService } from './../../../service/solicitudempleo.service';
import { SolicitudEmpleo } from './../../../model/solicitudempleo';
import { Contador } from './../../../model/contador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo-creadita',
  templateUrl: './solicitudempleo-creadita.component.html',
  styleUrls: ['./solicitudempleo-creadita.component.css']
})
export class SolicitudempleoCreaditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  listaContador: Contador[]=[];
  idContadorSeleccionado: number= 0; //falta revisar si esta bien
  mensaje: string = "";
  mensaje1: string = "";
  solicitudempleo: SolicitudEmpleo = new SolicitudEmpleo();

  constructor(private solicituempleoservice: SolicitudempleoService, private router: Router, private route: ActivatedRoute, private contadorservice:ContadorService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=> {
      this.id =data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.contadorservice.listarContador().subscribe(data => {this.listaContador= data});
  }
  aceptar():void{
    if (this.solicitudempleo.estadoSE.length> 0) { // falta revisar si es necesario añádir alguna restricion mas
      let se= new Contador();
      se.id= this.idContadorSeleccionado;
      this.solicitudempleo.contadorSE=se;
      if(this.edicion){
        this.solicituempleoservice.modificarSolicitud(this.solicitudempleo).subscribe(()=> {
          this.solicituempleoservice.listarSolicitud().subscribe(data => {
            this.solicituempleoservice.setlistarSolicitud(data);
          })
        });
      }else{
        this.solicituempleoservice.insertarSolicitud(this.solicitudempleo).subscribe(()=> {
          this.solicituempleoservice.listarSolicitud().subscribe(data =>{
            this.solicituempleoservice.setlistarSolicitud(data);
          })
        }, err =>{
          console.log(err)
        });
      }
      this.router.navigate(['solicitudempleo']);
    } else{
      this.mensaje= "Completar los datos"
    }
  }

  init(){
    if (this.edicion){
      this.solicituempleoservice.listarIdSolicitud(this.id).subscribe(data => {
        this.solicitudempleo = data
        console.log(data);
        this.idContadorSeleccionado= data.contadorSE.id
      });
    }
  }

}
