import { Contrato } from './../../../../model/contrato';
import { TipoPago } from './../../../../model/tipopago';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ContratoService } from '../../../../service/contrato.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-creadita',
  templateUrl: './creadita.component.html',
  styleUrls: ['./creadita.component.css']
})
export class ContratoCreaditaComponent implements OnInit {

  contrato: Contrato = new Contrato();
  id: number=0;
  mensaje:string = "";
  edicion:boolean = false;
  listaContrato: Contrato[]=[];
  idTipoPagoSeleccionado: number=0;
  fechaSeleccionada: string = "";
  mensaje1:string ="";
  maxfecha:string = "";
  constructor(private contratoService:ContratoService,
    private route:ActivatedRoute,
    private router:Router, private tipopago:TipoPago) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>{
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar():void{
    if(this.contrato.fechainiContrato.length > 0 && this.contrato.fechafinContrato.length > 0 &&
      this.contrato.montoContrato > 0 && this.contrato.Usuario && this.contrato.TipoMoneda && this.contrato.TipoPago &&
      this.contrato.CurriculumVitae && this.idTipoPagoSeleccionado>0){
        let t = new TipoPago();
        t.idTP = this.idTipoPagoSeleccionado;
        this.contrato.TipoPago=t;
          if(this.edicion){
            this.contratoService.modificar(this.contrato).subscribe(()=>{
              this.contratoService.listarContrato().subscribe(data =>{
                this.contratoService.setListaContrato(data);
              });
            })
          }else {
            this.contratoService.insertarContrato(this.contrato).subscribe(()=>{
              this.contratoService.listarContrato().subscribe(data => {
                this.contratoService.setListaContrato(data);
              });
            }, err => {
              console.log(err);

            });
          }
          this.router.navigate(['contrato']);


        /*this.contratoService.insertarContrato(this.contrato).subscribe(data=>{
          this.contratoService.listarContrato().subscribe(data=>{
            this.contratoService.setListaContrato(data);-*/
          }

      else{
        this.mensaje="Complete los valores requeridos";
      }

  }
  init() {
    if (this.edicion) {
      this.contratoService.listarId(this.id).subscribe(data => {
        this.contrato = data
        console.log(data);
        this.idTipoPagoSeleccionado = data.idContrato;
      });

    }

  }

}
