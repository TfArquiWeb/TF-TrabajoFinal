import { TipopagoService } from './../../../../service/tipopago.service';
import { Contrato } from './../../../../model/contrato';
import { TipoPago } from './../../../../model/tipopago';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ContratoService } from '../../../../service/contrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-creadita',
  templateUrl: './contrato-creadita.component.html',
  styleUrls: ['./contrato-creadita.component.css']
})
export class ContratoCreaditaComponent implements OnInit {

  contrato: Contrato = new Contrato();
  id: number=0;
  mensaje:string = "";
  edicion:boolean = false;
  listaTipopago: TipoPago[]=[];
  idTipoPagoSeleccionado: number=0;
  fechaSeleccionada: string = "";
  mensaje1:string ="";
  maxfecha:string = "";
  constructor(private contratoService:ContratoService,
    private route:ActivatedRoute,
    private router:Router, private tipopagoService:TipopagoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>{
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.tipopagoService.listarTipoPago().subscribe(data=> { this.listaTipopago = data});
  }

  aceptar():void{
    if(this.contrato.fechainiContrato.length > 0 && this.contrato.fechafinContrato.length > 0 &&
      this.contrato.montoContrato > 0 && this.contrato.Usuario && this.contrato.TipoMoneda && this.contrato.TipoPago &&
      this.contrato.Curriculum && this.idTipoPagoSeleccionado>0){
        let t = new TipoPago();
        t.id = this.idTipoPagoSeleccionado;
        this.contrato.TipoPago=t;
          if(this.edicion){
            this.contratoService.modificarContrato(this.contrato).subscribe(()=>{
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
      this.contratoService.listarIdContrato(this.id).subscribe(data => {
        this.contrato = data
        console.log(data);
        this.idTipoPagoSeleccionado = data.idContrato;
      });
    }
  }
}


