import { Contrato } from '../../../../model/contrato';
import { Router } from '@angular/router';
import { ContratoService } from '../../../../service/contrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creadita',
  templateUrl: './creadita.component.html',
  styleUrls: ['./creadita.component.css']
})
export class ContratoCreaditaComponent implements OnInit {

  contrato: Contrato = new Contrato();
  mensaje:string = "";
  constructor(private contratoService:ContratoService, private router:Router) { }

  ngOnInit(): void {
  }

  aceptar():void{
    if(this.contrato.fechainiContrato.length > 0 && this.contrato.fechafinContrato.length > 0 &&
      this.contrato.montoContrato > 0 && this.contrato.Usuario && this.contrato.TipoMoneda && this.contrato.TipoPago &&
      this.contrato.CurriculumVitae){
        this.contratoService.insertar(this.contrato).subscribe(data=>{
          this.contratoService.listar().subscribe(data=>{
            this.contratoService.setLista(data);
          })
        })
        this.router.navigate(['contrato']);
      }else{
        this.mensaje="Complete los valores requeridos";
      }
  }


}
