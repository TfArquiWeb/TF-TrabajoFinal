import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SolicitudempleoService } from 'src/app/service/solicitudempleo.service';

@Component({
  selector: 'app-solicitudempleo-dialogo',
  templateUrl: './solicitudempleo-dialogo.component.html',
  styleUrls: ['./solicitudempleo-dialogo.component.css']
})
export class SolicitudempleoDialogoComponent implements OnInit {

  constructor(private SeS: SolicitudempleoService, private dialogRef: MatDialogRef<SolicitudempleoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: Boolean){
    this.SeS.setConfirmaEliminacionSolicitud(estado);
    this.dialogRef.close();
  }

}
