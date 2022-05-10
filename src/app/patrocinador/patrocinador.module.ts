import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListComponent } from './patrocinador-list/patrocinador-list.component';
import { PatrocinadorDetailComponent } from './patrocinador-detail/patrocinador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PatrocinadorListComponent],
  declarations: [PatrocinadorListComponent, PatrocinadorDetailComponent]
})
export class PatrocinadorModule { }
