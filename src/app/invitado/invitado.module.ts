import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoListComponent } from './invitado-list/invitado-list.component';
import { InvitadoDetailComponent } from './invitado-detail/invitado-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InvitadoListComponent, InvitadoDetailComponent],
  declarations: [InvitadoListComponent, InvitadoDetailComponent]
})
export class InvitadoModule { }
