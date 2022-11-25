import { MatDialogRef } from '@angular/material/dialog';
import { CvService } from './../../../../service/cv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-dialogo',
  templateUrl: './cv-dialogo.component.html',
  styleUrls: ['./cv-dialogo.component.css']
})
export class CvDialogoComponent implements OnInit {
  
  constructor(private cvService: CvService, private dialogRef: MatDialogRef<CvDialogoComponent>) { }

  ngOnInit(): void {}

  confirmar(estado: boolean) {
    this.cvService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
} 
 