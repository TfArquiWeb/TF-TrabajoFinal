import { ContadorService } from './../../../../service/contador.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-dialogo',
  templateUrl: './contador-dialogo.component.html',
  styleUrls: ['./contador-dialogo.component.css']
})
export class ContadorDialogoComponent implements OnInit {

  constructor(private cS: ContadorService,private dialogRef: MatDialogRef<ContadorDialogoComponent>) {    
  }

  ngOnInit(): void {
    
  }
  confirmar(estado: Boolean) {
    this.cS.setConfirmaEliminacionContador(estado);
    this.dialogRef.close();
  }
}
