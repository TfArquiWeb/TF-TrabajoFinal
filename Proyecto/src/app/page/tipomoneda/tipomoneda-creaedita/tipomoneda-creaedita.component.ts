import { Router } from '@angular/router';
import { TipomonedaService } from 'src/app/service/tipomoneda.service';
import { TipoMoneda } from './../../../model/tipomoneda';
import { TipomonedaComponent } from './../tipomoneda.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipomoneda-creaedita',
  templateUrl: './tipomoneda-creaedita.component.html',
  styleUrls: ['./tipomoneda-creaedita.component.css']
})
export class TipomonedaCreaeditaComponent implements OnInit {
  tipomoneda: TipoMoneda = new TipoMoneda();
  mensaje:string="";
  constructor(private tPs:TipomonedaService, private router:Router) { }

  ngOnInit(): void {
  }
  aceptar(){
      if(this.tipomoneda.TipodeMoneda.length>0){
      this.tPs.insertarTipoMoneda(this.tipomoneda).subscribe(data=>{
        this.tPs.listarMoneda().subscribe(data=>{
          this.tPs.setListaTipoMoneda(data);
        })
      })
      this.router.navigate(['tipomoneda']);
    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }
}
