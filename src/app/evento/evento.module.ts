import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[EventoListComponent],
  declarations: [EventoListComponent,EventoDetailComponent]
})
export class EventoModule { }
