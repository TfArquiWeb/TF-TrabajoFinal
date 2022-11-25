import { Cv } from './cv';
import { Usuario } from './usuario';
import { TipoPago } from './tipopago';
import { TipoMoneda } from './tipomoneda';

export class Contrato {
    idContrato: number = 0;
    fechainiContrato: string = "";
    fechafinContrato: string = "";
    vigenciaContrato: boolean = true;
    montoContrato: number = 0;
    Usuario: Usuario = new Usuario();
    TipoMoneda: TipoMoneda = new TipoMoneda();
    TipoPago: TipoPago = new TipoPago();
    Cv: Cv = new Cv();
}