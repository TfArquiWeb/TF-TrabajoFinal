import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SolicitudempleoService } from 'src/app/service/solicitudempleo.service';

@Component({
  selector: 'app-solocitudempleo-dialogo',
  templateUrl: './solocitudempleo-dialogo.component.html',
  styleUrls: ['./solocitudempleo-dialogo.component.css']
})
export class SolocitudempleoDialogoComponent implements OnInit {

  constructor(private solicitudempleoService: SolicitudempleoService,
    private dialogRef: MatDialogRef<SolocitudempleoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.solicitudempleoService.setConfirmaEliminacionSolicitud(estado);
    this.dialogRef.close();
  }

}
