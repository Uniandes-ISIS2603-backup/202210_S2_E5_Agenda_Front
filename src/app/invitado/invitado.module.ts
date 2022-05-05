import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoListComponent } from './invitado-list/invitado-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InvitadoListComponent],
  declarations: [InvitadoListComponent]
})
export class InvitadoModule { }
