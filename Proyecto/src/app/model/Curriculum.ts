import { Experiencia } from './experiencia';
import { Capacitacion } from './capacitacion';
import { Habilidad } from './habilidad';
import { Contador } from 'src/app/model/contador';

export class CurriculumVitae {
    idCurriculum: number = 0;
    Habilidad: Habilidad = new Habilidad();
    Capacitacion: Capacitacion = new Capacitacion();
    Experiencia: Experiencia = new Experiencia();

} 