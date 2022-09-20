import { TipopagoComponent } from './page/tipopago/tipopago.component';
import { ContadorComponent } from './page/contador/contador.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { CapacitacionComponent } from './page/capacitacion/capacitacion.component';
import { ExperienciaComponent } from './page/experiencia/experiencia.component';
import { HabilidadComponent } from './page/habilidad/habilidad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'empresarios', component: EmpresarioComponent, children: [

  ]
}, {
  path: 'contadores', component: ContadorComponent, children: [

  ]
}, {
  path: 'tipopago', component: TipopagoComponent, children: [

  ]
},{
  path: 'capacitaciones', component: CapacitacionComponent, children:[

  ]
},{
  path: 'habilidades', component: HabilidadComponent, children:[

  ]
}
,{
  path: 'experiencias', component: ExperienciaComponent, children:[

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
