import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresarioComponent } from './page/empresario/empresario.component';
import { EmpresarioListarComponent } from './page/empresario/empresario-listar/empresario-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresarioComponent,
    EmpresarioListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
