import { MatDialogRef } from '@angular/material/dialog';
import { EmpresarioService } from './../../../../service/empresario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresario-dialogo',
  templateUrl: './empresario-dialogo.component.html',
  styleUrls: ['./empresario-dialogo.component.css']
})
export class EmpresarioDialogoComponent implements OnInit {

  constructor(private empresarioService: EmpresarioService,
    private dialogRef: MatDialogRef<EmpresarioDialogoComponent>) { }

    ngOnInit(): void {
    }
    confirmar(estado: boolean) {
      this.empresarioService.setConfirmaEliminacionEmpresario(estado);
      this.dialogRef.close();
    }
  }
  