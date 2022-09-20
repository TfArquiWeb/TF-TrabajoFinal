import { TipoPago } from './tipopago';
import { TipoMoneda } from './tipomoneda';
import { Empresario } from './empresario';
import { Contador } from './contador';

export class Contrato {
    idContrato: number = 0;
    fechainiContrato: string = "";
    fechafinContrato: string = "";
    vigenciaContrato: boolean = true;
    montoContrato: number = 0;
    Contador: Contador = new Contador(); 
    Empresario: Empresario = new Empresario();
    TipoMoneda: TipoMoneda = new TipoMoneda();
    TipoPago: TipoPago = new TipoPago(); 
}