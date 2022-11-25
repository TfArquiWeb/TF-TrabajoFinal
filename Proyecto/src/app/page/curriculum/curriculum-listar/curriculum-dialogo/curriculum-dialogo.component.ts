import { MatDialogRef } from '@angular/material/dialog';
import { CurriculumService } from './../../../../service/curriculum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-dialogo',
  templateUrl: './curriculum-dialogo.component.html',
  styleUrls: ['./curriculum-dialogo.component.css']
})
export class CurriculumDialogoComponent implements OnInit {
  
  constructor(private curriculumService: CurriculumService, private dialogRef: MatDialogRef<CurriculumDialogoComponent>) { }

  ngOnInit(): void {}

  confirmar(estado: boolean) {
    this.curriculumService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
} 
 