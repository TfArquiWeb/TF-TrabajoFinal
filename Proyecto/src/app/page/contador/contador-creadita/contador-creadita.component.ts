import { Router } from '@angular/router';
import { ContadorService } from './../../../service/contador.service';
import { Contador } from 'src/app/model/contador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-creadita',
  templateUrl: './contador-creadita.component.html',
  styleUrls: ['./contador-creadita.component.css']
})
export class ContadorCreaditaComponent implements OnInit {
  contador: Contador = new Contador();
  mensaje: string = "";
  constructor(private contadorservice: ContadorService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.contador.descContador.length > 0 && this.contador.linkedinContador.length > 0) {
      this.contadorservice.insertar(this.contador).subscribe(data => {
        this.contadorservice.listar().subscribe(data => {
          this.contadorservice.setlistacontador(data);
        })
      });
      this.router.navigate(['contador']);
    } else{
      this.mensaje="Completar los datos";
    }
  }

}
