import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../../../service/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-dialogo',
  templateUrl: './usuario-dialogo.component.html',
  styleUrls: ['./usuario-dialogo.component.css']
})
export class UsuarioDialogoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<UsuarioDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmarUsuario(estado: boolean) {
    this.usuarioService.setConfirmaEliminacionUsuario(estado);
    this.dialogRef.close();
  }
} 
