import { Experiencia } from './experiencia';
import { Capacitacion } from './capacitacion';
import { Habilidad } from './habilidad';
import { Contador } from 'src/app/model/contador';

export class CurriculumVitae {
    Habilidad: Habilidad = new Habilidad();
    Capacitacion: Capacitacion = new Capacitacion();
    Experiencia: Experiencia = new Experiencia();
    Contador: Contador = new Contador();

} 