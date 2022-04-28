import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from './organizador-list/organizador-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OrganizadorListComponent],
  declarations: [OrganizadorListComponent]
})
export class OrganizadorModule { }
