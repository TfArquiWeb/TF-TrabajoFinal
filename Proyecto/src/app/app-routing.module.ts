import { UsuarioComponent } from './page/usuario/usuario.component';
import { TipomonedaComponent } from './page/tipomoneda/tipomoneda.component';
import { TipopagoComponent } from './page/tipopago/tipopago.component';
import { ContadorComponent } from './page/contador/contador.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { CapacitacionComponent } from './page/capacitacion/capacitacion.component';
import { ExperienciaComponent } from './page/experiencia/experiencia.component';
import { HabilidadComponent } from './page/habilidad/habilidad.component';
import { CapacitacionCreaeditaComponent } from './page/capacitacion/capacitacion-creaedita/capacitacion-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    { path: 'editar', component: CapacitacionCreaeditaComponent }
  ]
}, {
  path: 'habilidad', component: HabilidadComponent, children: [

  ]
}, {
  path: 'experiencia', component: ExperienciaComponent, children: [

  ]
}, {
  path: 'tipomoneda', component: TipomonedaComponent, children: [

  ]
}, {
  path: 'usuario', component: UsuarioComponent, children: [

  ]
}, {
  path: 'contrato', component: UsuarioComponent, children: [

  ]
}, {
  path: 'curriculum', component: UsuarioComponent, children: [

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
