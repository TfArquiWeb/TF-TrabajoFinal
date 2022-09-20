import { Experiencia } from './experiencia';
import { Capacitacion } from './capacitacion';
import { Habilidad } from './habilidad';

export class CurriculumVitae {
    idCurriculum: number = 0;
    Habilidad: Habilidad = new Habilidad();
    Capacitacion: Capacitacion = new Capacitacion();
    Experiencia: Experiencia = new Experiencia();

} 