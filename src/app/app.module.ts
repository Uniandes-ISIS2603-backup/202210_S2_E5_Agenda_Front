import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventoModule } from './evento/evento.module';
import { PatrocinadorModule } from './patrocinador/patrocinador.module';
import { OrganizadorModule } from './organizador/organizador.module';
import { ResponsableModule } from './responsable/responsable.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventoModule,
    PatrocinadorModule,
    OrganizadorModule,
    ResponsableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
