import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[EventoListComponent],
  declarations: [EventoListComponent]
})
export class EventoModule { }
