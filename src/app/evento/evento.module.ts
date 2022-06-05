import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { RouterModule } from '@angular/router';
import { EventoRoutingModule } from './evento-routing.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, EventoRoutingModule
  ],
  exports:[EventoListComponent],
  declarations: [EventoListComponent,EventoDetailComponent]
})
export class EventoModule { }
