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
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { ContratoListarComponent } from './page/contrato/contrato-listar/contrato-listar.component';
import { ExperienciaCreaeditaComponent } from './page/experiencia/experiencia-creaedita/experiencia-creaedita.component';
import { HabilidadCreaeditaComponent } from './page/habilidad/habilidad-creaedita/habilidad-creaedita.component';
import { CurriculumComponent } from './page/curriculum/curriculum.component';
import { CurriculumListarComponent } from './page/curriculum/curriculum-listar/curriculum-listar.component';
import { ContadorCreaditaComponent } from './page/contador/contador-creadita/contador-creadita.component';
import { UsuarioCreaditaComponent } from './page/usuario/usuario-creadita/usuario-creadita.component';
import { EmpresarioCreaditaComponent } from './page/empresario/empresario-creadita/empresario-creadita.component';
import { TipopagoCreaeditaComponent } from './page/tipopago/tipopago-creaedita/tipopago-creaedita.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavComponent } from './page/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CapacitacionBuscarComponent } from './page/capacitacion/capacitacion-buscar/capacitacion-buscar.component';
import { CapacitacionDialogoComponent } from './page/capacitacion/capacitacion-listar/capacitacion-dialogo/capacitacion-dialogo.component';
import { ExperienciaDialogoComponent } from './page/experiencia/experiencia-listar/experiencia-dialogo/experiencia-dialogo.component';
import { ExperienciaBuscarComponent } from './page/experiencia/experiencia-buscar/experiencia-buscar.component';
import { HabilidadDialogoComponent } from './page/habilidad/habilidad-listar/habilidad-dialogo/habilidad-dialogo.component';
import { HabilidadBuscarComponent } from './page/habilidad/habilidad-buscar/habilidad-buscar.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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
    ContratoListarComponent,
    ExperienciaCreaeditaComponent,
    HabilidadCreaeditaComponent,
    CurriculumComponent,
    CurriculumListarComponent,
    ContadorCreaditaComponent,
    UsuarioCreaditaComponent,
    EmpresarioCreaditaComponent,
    TipopagoCreaeditaComponent,
    SidenavComponent,
    CapacitacionBuscarComponent,
    CapacitacionDialogoComponent,
    ExperienciaDialogoComponent,
    ExperienciaBuscarComponent,
    HabilidadDialogoComponent,
    HabilidadBuscarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
