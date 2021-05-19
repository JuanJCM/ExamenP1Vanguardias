import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumenCuentasComponent } from './resumen-cuentas/resumen-cuentas.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CuentaListaComponent } from './cuenta-lista/cuenta-lista.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import {HttpClient} from"@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ResumenCuentasComponent,
    HomePageComponent,
    CuentaListaComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
