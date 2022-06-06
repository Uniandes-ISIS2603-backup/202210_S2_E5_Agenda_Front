import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from './organizador-list/organizador-list.component';
import { OrganizadorDetailComponent } from './organizador-detail/organizador-detail.component';
import { OrganizadorRoutingModule } from './organizador-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OrganizadorRoutingModule,
  ],
  exports: [OrganizadorListComponent, OrganizadorDetailComponent],
  declarations: [OrganizadorListComponent, OrganizadorDetailComponent]
})
export class OrganizadorModule { }
