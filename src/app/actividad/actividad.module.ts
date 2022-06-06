import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    ActividadListComponent,ActividadDetailComponent
  ],
  exports: [ ActividadListComponent]
})
export class ActividadModule { }
