import { MatDialogRef } from '@angular/material/dialog';
import { TipomonedaService } from 'src/app/service/tipomoneda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipomoneda-dialogo',
  templateUrl: './tipomoneda-dialogo.component.html',
  styleUrls: ['./tipomoneda-dialogo.component.css']
})
export class TipomonedaDialogoComponent implements OnInit {

  constructor(private tipomonedaService:TipomonedaService,
    private dialogRef:MatDialogRef<TipomonedaDialogoComponent>) { }

  ngOnInit(): void {}
    confirmarTipoMoneda(estado:boolean){
      this.tipomonedaService.setConfirmaEliminacionTipoMoneda(estado);
    this.dialogRef.close();
  }

}
