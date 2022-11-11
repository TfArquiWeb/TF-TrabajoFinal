import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './../../../../service/experiencia.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experiencia-dialogo',
  templateUrl: './experiencia-dialogo.component.html',
  styleUrls: ['./experiencia-dialogo.component.css']
})
export class ExperienciaDialogoComponent implements OnInit {
  constructor(private experienciaService: ExperienciaService,
    private dialogRef: MatDialogRef<ExperienciaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.experienciaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
