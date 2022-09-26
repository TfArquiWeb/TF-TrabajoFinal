import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CapacitacionService } from './../../../../service/capacitacion.service';
@Component({
  selector: 'app-capacitacion-dialogo',
  templateUrl: './capacitacion-dialogo.component.html',
  styleUrls: ['./capacitacion-dialogo.component.css']
})
export class CapacitacionDialogoComponent implements OnInit {

  constructor(private capacitacionService: CapacitacionService,
    private dialogRef: MatDialogRef<CapacitacionDialogoComponent>) { }

  ngOnInit(): void {}
  confirmarCapacitacion(estado: boolean) {
    this.capacitacionService.setConfirmaEliminacionCapacitacion(estado);
    this.dialogRef.close();
  }
} 
