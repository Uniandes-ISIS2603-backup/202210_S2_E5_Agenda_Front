import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventoModule } from './evento/evento.module';
import { PatrocinadorModule } from './patrocinador/patrocinador.module';
import { OrganizadorModule } from './organizador/organizador.module';
import { ResponsableModule } from './responsable/responsable.module';
import { ActividadModule } from './actividad/actividad.module';
import { EscenarioModule } from './escenario/escenario.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { EventoRoutingModule } from './evento/evento-routing.module';
import { ActividadRoutingModule } from './actividad/actividad-routing.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EventoModule,
    PatrocinadorModule,
    OrganizadorModule,
    ResponsableModule,
    ActividadModule,
    EscenarioModule,
    MultimediaModule,
    EventoRoutingModule,
    ActividadRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
