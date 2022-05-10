import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableListComponent } from './responsable-list/responsable-list.component';
import { ResponsableDetailComponent } from './responsable-detail/responsable-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ResponsableListComponent,ResponsableDetailComponent],
  declarations: [ResponsableListComponent, ResponsableDetailComponent]
})
export class ResponsableModule { }
