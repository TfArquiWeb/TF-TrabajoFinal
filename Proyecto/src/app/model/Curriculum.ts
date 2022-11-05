import { Habilidad } from './habilidad';
import { Capacitacion } from './capacitacion';
import { Experiencia } from './experiencia';
export class curriculum {
    id: number = 0;
    Habilidad: Habilidad = new Habilidad();
    Capacitacion: Capacitacion = new Capacitacion();
    Experiencia: Experiencia = new Experiencia();

}