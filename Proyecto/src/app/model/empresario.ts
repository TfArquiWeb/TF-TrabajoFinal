import { Usuario } from './usuario';

export class Empresario {
    id: number = 0;
    razonEmpresario: string = "";
    rucEmpresario: number = 0;
    rubroEmpresario: string = "";
    descEmpresario: string = "";
    usuario: Usuario = new Usuario();
} 