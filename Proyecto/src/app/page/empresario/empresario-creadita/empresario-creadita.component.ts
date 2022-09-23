import { Router } from '@angular/router';
import { EmpresarioService } from './../../../service/empresario.service';
import { Empresario } from 'src/app/model/empresario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresario-creadita',
  templateUrl: './empresario-creadita.component.html',
  styleUrls: ['./empresario-creadita.component.css']
})
export class EmpresarioCreaditaComponent implements OnInit {
  empresario: Empresario = new Empresario();
  mensaje:string ="";
  constructor(private empresarioservice:EmpresarioService,private router:Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.empresario.razonsocialEmpresario.length > 0 && this.empresario.rubroEmpresario.length > 0 && this.empresario.descEmpresario.length > 0 &&this.empresario.rucEmpresario>0) {

      this.empresarioservice.insertar(this.empresario).subscribe(data => {
        this.empresarioservice.listar().subscribe(data => {
          this.empresarioservice.setListaEmpresario(data);
        })
      })
      this.router.navigate(['empresario']);
    } else {
      this.mensaje = "Complete los datos";
    }
  }
}
