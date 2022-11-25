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
import { MatSelectModule } from '@angular/material/select';
import { UsuarioBuscarComponent } from './page/usuario/usuario-buscar/usuario-buscar.component';
import { TipomonedaComponent } from './page/tipomoneda/tipomoneda.component';
import { TipopagoBuscarComponent } from './page/tipopago/tipopago-buscar/tipopago-buscar.component';
import { TipomonedaListarComponent } from './page/tipomoneda/tipomoneda-listar/tipomoneda-listar.component';
import { TipomonedaDialogoComponent } from './page/tipomoneda/tipomoneda-listar/tipomoneda-dialogo/tipomoneda-dialogo.component';
import { TipomonedaBuscarComponent } from './page/tipomoneda/tipomoneda-buscar/tipomoneda-buscar.component';
import { TipomonedaCreaeditaComponent } from './page/tipomoneda/tipomoneda-creaedita/tipomoneda-creaedita.component';
import { CurriculumListarComponent } from './page/curriculum/curriculum-listar/curriculum-listar.component';
import { ContadorDialogoComponent } from './page/contador/contador-listar/contador-dialogo/contador-dialogo.component';
import { ContadorBuscarComponent } from './page/contador/contador-buscar/contador-buscar.component';
import { ContadorOrdenarComponent } from './page/contador/contador-ordenar/contador-ordenar.component';
import { ContadorCantidadComponent } from './page/contador/contador-cantidad/contador-cantidad.component';
import { CurriculumCreaeditaComponent } from './page/curriculum/curriculum-creaedita/curriculum-creaedita.component';
import { CurriculumBuscarComponent } from './page/curriculum/curriculum-buscar/curriculum-buscar.component';
import { CurriculumDialogoComponent } from './page/curriculum/curriculum-listar/curriculum-dialogo/curriculum-dialogo.component';
import { CurriculumCantidadComponent } from './page/curriculum/curriculum-cantidad/curriculum-cantidad.component';
import { CurriculumOrdenarComponent } from './page/curriculum/curriculum-ordenar/curriculum-ordenar.component';
import { CvComponent } from './page/cv/cv.component';
import { CvListarComponent } from './page/cv/cv-listar/cv-listar.component';
import { CvDialogoComponent } from './page/cv/cv-listar/cv-dialogo/cv-dialogo.component';
import { CvBuscarComponent } from './page/cv/cv-buscar/cv-buscar.component';
import { CvCantidadComponent } from './page/cv/cv-cantidad/cv-cantidad.component';
import { CvOrdenarComponent } from './page/cv/cv-ordenar/cv-ordenar.component';
import { CvCreaeditaComponent } from './page/cv/cv-creaedita/cv-creaedita.component';
import { EmpresarioBuscarComponent } from './page/empresario/empresario-buscar/empresario-buscar.component';
import { EmpresarioCantidadComponent } from './page/empresario/empresario-cantidad/empresario-cantidad.component';
import { EmpresarioOrdenarComponent } from './page/empresario/empresario-ordenar/empresario-ordenar.component';




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
    UsuarioBuscarComponent,
    TipomonedaComponent,
    TipopagoBuscarComponent,
    TipomonedaListarComponent,
    TipomonedaDialogoComponent,
    TipomonedaBuscarComponent,
    TipomonedaCreaeditaComponent,
    CurriculumListarComponent,
    ContadorDialogoComponent,
    ContadorBuscarComponent,
    ContadorOrdenarComponent,
    ContadorCantidadComponent,
    CurriculumCreaeditaComponent,
    CurriculumBuscarComponent,
    CurriculumDialogoComponent,
    CurriculumCantidadComponent,
    CurriculumOrdenarComponent,
    CvComponent,
    CvListarComponent,
    CvDialogoComponent,
    CvBuscarComponent,
    CvCantidadComponent,
    CvOrdenarComponent,
    CvCreaeditaComponent,
    EmpresarioBuscarComponent,
    EmpresarioCantidadComponent,
    EmpresarioOrdenarComponent,

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
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
