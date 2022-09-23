import { ExperienciaListarComponent } from './page/experiencia/experiencia-listar/experiencia-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContadorComponent } from './page/contador/contador.component';
import { ContadorListarComponent } from './page/contador/contador-listar/contador-listar.component';
import { TipopagoComponent } from './page/tipopago/tipopago.component';
import { TipopagoListarComponent } from './page/tipopago/tipopago-listar/tipopago-listar.component';
import { ContratoComponent } from './page/contrato/contrato.component';
import { ExperienciaComponent } from './page/experiencia/experiencia.component';
import { HabilidadComponent } from './page/habilidad/habilidad.component';
import { CapacitacionComponent } from './page/capacitacion/capacitacion.component';
import { CapacitacionListarComponent } from './page/capacitacion/capacitacion-listar/capacitacion-listar.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { EmpresarioListarComponent } from './page/empresario/empresario-listar/empresario-listar.component';
import { HabilidadListarComponent } from './page/habilidad/habilidad-listar/habilidad-listar.component';
import { CapacitacionCreaeditaComponent } from './page/capacitacion/capacitacion-creaedita/capacitacion-creaedita.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { TipomonedaComponent } from './page/tipomoneda/tipomoneda.component';
import { TipomonedaListarComponent } from './page/tipomoneda/tipomoneda-listar/tipomoneda-listar.component';
import { ContratoListarComponent } from './page/contrato/contrato-listar/contrato-listar.component';
import { ExperienciaCreaeditaComponent } from './page/experiencia/experiencia-creaedita/experiencia-creaedita.component';
import { HabilidadCreaeditaComponent } from './page/habilidad/habilidad-creaedita/habilidad-creaedita.component';
import { CurriculumComponent } from './page/curriculum/curriculum.component';
import { CurriculumListarComponent } from './page/curriculum/curriculum-listar/curriculum-listar.component';
import { SolicitudempleoCreaditaComponent } from './page/solicitudempleo/solicitudempleo-creadita/solicitudempleo-creadita.component';
import { ContadorCreaditaComponent } from './page/contador/contador-creadita/contador-creadita.component';
import { UsuarioCreaditaComponent } from './page/usuario/usuario-creadita/usuario-creadita.component';
import { EmpresarioCreaditaComponent } from './page/empresario/empresario-creadita/empresario-creadita.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresarioComponent,
    EmpresarioListarComponent,
    ContadorComponent,
    ContadorListarComponent,
    TipopagoComponent,
    TipopagoListarComponent,
    ContratoComponent,
    ExperienciaComponent,
    HabilidadComponent,
    CapacitacionComponent,
    CapacitacionListarComponent,
    ExperienciaListarComponent, 
    HabilidadListarComponent,
    CapacitacionCreaeditaComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    TipomonedaComponent,
    TipomonedaListarComponent,
    ContratoListarComponent,
    ExperienciaCreaeditaComponent,
    HabilidadCreaeditaComponent,
    CurriculumComponent,
    CurriculumListarComponent,
    SolicitudempleoCreaditaComponent,
    ContadorCreaditaComponent,
    UsuarioCreaditaComponent,
    EmpresarioCreaditaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
