import { Empresario } from './empresario';
import { Contador } from './contador';
export class Contrato {
    idContrato: number = 0;
    numeroContrato: number = 0;
    fechainiContrato: string = '2020-10-21' ;
    fechafinContrato: string = '2020-10-24';
    flagContrato: boolean = true;
    Contador: Contador = new Contador(); 
    Empresario: Empresario = new Empresario();
}