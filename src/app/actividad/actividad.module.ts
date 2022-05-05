import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadListComponent } from './actividad-list/actividad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActividadListComponent,
  ],
  exports: [ ActividadListComponent]
})
export class ActividadModule { }
