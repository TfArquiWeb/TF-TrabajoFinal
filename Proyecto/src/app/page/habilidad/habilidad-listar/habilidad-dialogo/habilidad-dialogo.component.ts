import { Component, OnInit } from '@angular/core';
import { HabilidadService } from './../../../../service/habilidad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-habilidad-dialogo',
  templateUrl: './habilidad-dialogo.component.html',
  styleUrls: ['./habilidad-dialogo.component.css']
})
export class HabilidadDialogoComponent implements OnInit {
  constructor(private habilidadService: HabilidadService,
    private dialogRef: MatDialogRef<HabilidadDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.habilidadService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
