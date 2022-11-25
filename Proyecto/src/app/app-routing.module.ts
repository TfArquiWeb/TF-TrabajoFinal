
import { CvCantidadComponent } from './page/cv/cv-cantidad/cv-cantidad.component';
import { CvOrdenarComponent } from './page/cv/cv-ordenar/cv-ordenar.component';
import { CvCreaeditaComponent } from './page/cv/cv-creaedita/cv-creaedita.component';
import { CvComponent } from './page/cv/cv.component';
import { CurriculumCantidadComponent } from './page/curriculum/curriculum-cantidad/curriculum-cantidad.component';
import { CurriculumOrdenarComponent } from './page/curriculum/curriculum-ordenar/curriculum-ordenar.component';

import { EmpresarioCantidadComponent } from './page/empresario/empresario-cantidad/empresario-cantidad.component';
import { EmpresarioOrdenarComponent } from './page/empresario/empresario-ordenar/empresario-ordenar.component';
import { EmpresarioCreaditaComponent } from './page/empresario/empresario-creadita/empresario-creadita.component';

import { ContadorCantidadComponent } from './page/contador/contador-cantidad/contador-cantidad.component';
import { ContadorOrdenarComponent } from './page/contador/contador-ordenar/contador-ordenar.component';
import { CurriculumCreaeditaComponent } from './page/curriculum/curriculum-creaedita/curriculum-creaedita.component';
import { ContadorCreaditaComponent } from './page/contador/contador-creadita/contador-creadita.component';
import { UsuarioCreaditaComponent } from './page/usuario/usuario-creadita/usuario-creadita.component';
import { CurriculumComponent } from './page/curriculum/curriculum.component';
import { ContratoComponent } from './page/contrato/contrato.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { TipopagoComponent } from './page/tipopago/tipopago.component';
import { ContadorComponent } from './page/contador/contador.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { CapacitacionComponent } from './page/capacitacion/capacitacion.component';
import { ExperienciaComponent } from './page/experiencia/experiencia.component';
import { HabilidadComponent } from './page/habilidad/habilidad.component';
import { CapacitacionCreaeditaComponent } from './page/capacitacion/capacitacion-creaedita/capacitacion-creaedita.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadCreaeditaComponent } from './page/habilidad/habilidad-creaedita/habilidad-creaedita.component';
import { ExperienciaCreaeditaComponent } from './page/experiencia/experiencia-creaedita/experiencia-creaedita.component';
import { TipopagoCreaeditaComponent } from './page/tipopago/tipopago-creaedita/tipopago-creaedita.component';
import { TipomonedaCreaeditaComponent } from './page/tipomoneda/tipomoneda-creaedita/tipomoneda-creaedita.component';
import { TipomonedaComponent } from './page/tipomoneda/tipomoneda.component';
const routes: Routes = [{
  path: 'empresario', component: EmpresarioComponent, children: [
    { path: 'insertar', component: EmpresarioCreaditaComponent },
    { path: 'edicion/:id', component: EmpresarioCreaditaComponent },
    { path: 'ordenar', component: EmpresarioOrdenarComponent },
    { path: 'cantidad', component: EmpresarioCantidadComponent }
  ]
}, {
  path: 'contador', component: ContadorComponent, children: [
    { path: 'insertar', component: ContadorCreaditaComponent },
    { path: 'edicion/:id', component: ContadorCreaditaComponent },
    { path: 'ordenar', component: ContadorOrdenarComponent },
    { path: 'cantidad', component: ContadorCantidadComponent }
  ]
}, {
  path: 'tipopago', component: TipopagoComponent, children: [
    {path: 'insertar', component: TipopagoCreaeditaComponent},
    { path: 'edicion/:id', component: TipopagoCreaeditaComponent }
  ]
}, {
  path: 'capacitacion', component: CapacitacionComponent, children: [
    { path: 'insertar', component: CapacitacionCreaeditaComponent },
    { path: 'edicion/:id', component: CapacitacionCreaeditaComponent }

  ]
}, {
  path: 'habilidad', component: HabilidadComponent, children: [
    { path: 'insertar', component: HabilidadCreaeditaComponent },
    { path: 'edicion/:id', component: HabilidadCreaeditaComponent }

  ]
}, {
  path: 'experiencia', component: ExperienciaComponent, children: [
    { path: 'insertar', component: ExperienciaCreaeditaComponent },
    { path: 'edicion/:id', component: ExperienciaCreaeditaComponent }

  ]
},  
{
  path: 'usuario', component: UsuarioComponent, children: [
    { path: 'insertar', component: UsuarioCreaditaComponent },
    { path: 'edicion/:id', component: UsuarioCreaditaComponent }
  ]
}, { 
  path: 'contrato', component: ContratoComponent, children: [

  ]
}, {
  path: 'nocurriculum', component: CurriculumComponent, children: [
    {path: 'insertar', component: CurriculumCreaeditaComponent},
    { path: 'edicion/:id', component: CurriculumCreaeditaComponent },
    { path: 'ordenar', component: CurriculumOrdenarComponent },
    { path: 'cantidad', component: CurriculumCantidadComponent }
  ]
},{
  path: 'curriculum', component: CvComponent, children: [
    {path: 'insertar', component: CvCreaeditaComponent},
    { path: 'edicion/:id', component: CvCreaeditaComponent },
    { path: 'ordenar', component: CvOrdenarComponent },
    { path: 'cantidad', component: CvCantidadComponent }
  ]
}, {
  path: 'tipomoneda', component: TipomonedaComponent, children: [
    {path: 'insertar', component: TipomonedaCreaeditaComponent},
    { path: 'edicion/:id', component: TipomonedaCreaeditaComponent }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
