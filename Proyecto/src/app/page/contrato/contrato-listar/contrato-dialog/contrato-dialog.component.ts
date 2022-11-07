import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContratoService } from './../../../../service/contrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-dialog',
  templateUrl: './contrato-dialog.component.html',
  styleUrls: ['./contrato-dialog.component.css']
})
export class ContratoDialogComponent implements OnInit {

  constructor(private contratoService: ContratoService,
    private dialogRef: MatDialogRef<ContratoDialogComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado:boolean){
    this.contratoService.setConfirmaEliminacionContrato(estado);
    this.dialogRef.close();
  }
}
