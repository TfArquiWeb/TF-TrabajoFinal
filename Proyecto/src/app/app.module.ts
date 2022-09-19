import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { EmpresarioListarComponent } from './page/empresario/empresario-listar/empresario-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContadorComponent } from './page/contador/contador.component';
import { ContadorListarComponent } from './page/contador/contador-listar/contador-listar.component';
import { TipopagoComponent } from './page/tipopago/tipopago.component';
import { TipopagoListarComponent } from './page/tipopago/tipopago-listar/tipopago-listar.component';
import { ContratoComponent } from './page/contrato/contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresarioComponent,
    EmpresarioListarComponent,
    ContadorComponent,
    ContadorListarComponent,
    TipopagoComponent,
    TipopagoListarComponent,
    ContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
