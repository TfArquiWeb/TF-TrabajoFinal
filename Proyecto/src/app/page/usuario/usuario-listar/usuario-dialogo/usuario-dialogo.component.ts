import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-dialogo',
  templateUrl: './usuario-dialogo.component.html',
  styleUrls: ['./usuario-dialogo.component.css']
})
export class UsuarioDialogoComponent implements OnInit {

  constructor(private Us:UsuarioService,private dialogRef: MatDialogRef<UsuarioDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmarUsuario(estado: boolean) {
    this.Us.setConfirmaEliminacionUsuario(estado);
    this.dialogRef.close();
  }
}
