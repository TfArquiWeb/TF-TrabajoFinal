import { EmpresarioService } from './../../../service/empresario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresario-buscar',
  templateUrl: './empresario-buscar.component.html',
  styleUrls: ['./empresario-buscar.component.css']
})
export class EmpresarioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private empresarioservice:EmpresarioService) { }

  ngOnInit(): void {
  }
  buscarEmpresarioDescripcion(e: any) {
    this.empresarioservice.buscarEmpresarioDescripcion(e.target.value).subscribe(data=>{
      this.empresarioservice.setListaEmpresario(data);
    });    
  }
}
