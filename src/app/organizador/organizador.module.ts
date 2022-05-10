import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from './organizador-list/organizador-list.component';
import { OrganizadorDetailComponent } from './organizador-detail/organizador-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [OrganizadorListComponent, OrganizadorDetailComponent],
  declarations: [OrganizadorListComponent, OrganizadorDetailComponent]
})
export class OrganizadorModule { }
