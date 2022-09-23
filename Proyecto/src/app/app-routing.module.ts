import { SolicitudempleoCreaditaComponent } from './page/solicitudempleo/solicitudempleo-creadita/solicitudempleo-creadita.component';
import { SolicitudEmpleo } from './model/solicitudempleo';
import { SolicitudempleoComponent } from './page/solicitudempleo/solicitudempleo.component';
import { CurriculumComponent } from './page/curriculum/curriculum.component';
import { ContratoComponent } from './page/contrato/contrato.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { TipomonedaComponent } from './page/tipomoneda/tipomoneda.component';
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
const routes: Routes = [{
  path: 'empresario', component: EmpresarioComponent, children: [

  ]
}, {
  path: 'contador', component: ContadorComponent, children: [

  ]
}, {
  path: 'tipopago', component: TipopagoComponent, children: [

  ]
}, {
  path: 'capacitacion', component: CapacitacionComponent, children: [
    { path: 'insertar', component: CapacitacionCreaeditaComponent }
  ]
}, {
  path: 'habilidad', component: HabilidadComponent, children: [
    { path: 'insertar', component: HabilidadCreaeditaComponent }

  ]
}, {
  path: 'experiencia', component: ExperienciaComponent, children: [
    { path: 'insertar', component: ExperienciaCreaeditaComponent }

  ]
}, {
  path: 'tipomoneda', component: TipomonedaComponent, children: [

  ]
}, {
  path: 'usuario', component: UsuarioComponent, children: [

  ]
}, {
  path: 'contrato', component: ContratoComponent, children: [

  ]
}, {
  path: 'curriculum', component: CurriculumComponent, children: [

  ]
}, {
  path: 'solicitudempleo', component: SolicitudempleoComponent, children: [
    { path: 'nuevo', component: SolicitudempleoCreaditaComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
