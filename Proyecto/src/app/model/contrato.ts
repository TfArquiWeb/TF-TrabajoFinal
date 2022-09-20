
import { CurriculumVitae } from './Curriculum';
import { Usuario } from './usuario';
import { CurriculumVitae } from './curriculum';
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
    CurriculumVitae: CurriculumVitae = new CurriculumVitae();
}