import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableListComponent } from './responsable-list/responsable-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ResponsableListComponent],
  declarations: [ResponsableListComponent]
})
export class ResponsableModule { }
