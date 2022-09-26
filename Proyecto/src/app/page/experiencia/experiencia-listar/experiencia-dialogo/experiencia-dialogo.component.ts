import { MatDialogRef } from '@angular/material/dialog';
import { ExperienciaService } from './../../../../service/experiencia.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-experiencia-dialogo',
  templateUrl: './experiencia-dialogo.component.html',
  styleUrls: ['./experiencia-dialogo.component.css']
})
export class ExperienciaDialogoComponent implements OnInit {

  constructor(private experienciaService: ExperienciaService,
    private dialogRef: MatDialogRef<ExperienciaDialogoComponent>) { }

  ngOnInit(): void { }
  confirmarExperiencia(estado: boolean) {
    this.experienciaService.setConfirmaEliminacionExperiencia(estado);
    this.dialogRef.close();
  }

}
