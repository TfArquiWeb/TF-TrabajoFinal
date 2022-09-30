import { Component, OnInit } from '@angular/core';
import { TipomonedaService } from './../../../../service/tipomoneda.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipomoneda-dialogo',
  templateUrl: './tipomoneda-dialogo.component.html',
  styleUrls: ['./tipomoneda-dialogo.component.css']
})
export class TipomonedaDialogoComponent implements OnInit {

  constructor(private tipomonedaService: TipomonedaService,
    private dialogRef: MatDialogRef<TipomonedaDialogoComponent>) { }

  ngOnInit(): void {
  } 
  confirmarTipoMoneda(estado: boolean) {
    this.tipomonedaService.setConfirmaEliminacionTipoMoneda(estado);
    this.dialogRef.close();
  }
}
