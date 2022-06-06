import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InvitadoListComponent } from "./invitado-list/invitado-list.component";
import { InvitadoDetailComponent } from "./invitado-detail/invitado-detail.component";

const routes: Routes = [{
  path: 'invitados',
  children: [
    {
      path: 'list',
      component: InvitadoListComponent
    },
    {
      path: ':id',
      component: InvitadoDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvitadoRoutingModule{}
