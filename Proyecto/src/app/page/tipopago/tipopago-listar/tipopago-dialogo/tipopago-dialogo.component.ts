import { TipopagoService } from 'src/app/service/tipopago.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipopago-dialogo',
  templateUrl: './tipopago-dialogo.component.html',
  styleUrls: ['./tipopago-dialogo.component.css']
})
export class TipopagoDialogoComponent implements OnInit {

  constructor(private tipopagoService: TipopagoService, private dialogRef: MatDialogRef<TipopagoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmarTipoPago(estado: boolean) {
    this.tipopagoService.setConfirmaEliminacionTipoPago(estado);
    this.dialogRef.close();
  }

}
