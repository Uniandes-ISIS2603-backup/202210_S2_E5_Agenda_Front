import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListComponent } from './patrocinador-list/patrocinador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PatrocinadorListComponent],
  declarations: [PatrocinadorListComponent]
})
export class PatrocinadorModule { }
