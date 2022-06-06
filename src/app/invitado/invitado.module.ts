import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoListComponent } from './invitado-list/invitado-list.component';
import { InvitadoDetailComponent } from './invitado-detail/invitado-detail.component';
import { InvitadoRoutingModule } from './invitado-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule,InvitadoRoutingModule
  ],
  exports: [InvitadoListComponent],
  declarations: [InvitadoListComponent, InvitadoDetailComponent]
})
export class InvitadoModule { }
