import { ContadorComponent } from './page/contador/contador.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'empresarios', component: EmpresarioComponent, children:[

  ]
},{
  path: 'contadores', component: ContadorComponent, children:[

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
