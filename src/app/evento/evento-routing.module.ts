import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from "./evento-list/evento-list.component";
import { EventoDetailComponent } from "./evento-detail/evento-detail.component";

const routes: Routes = [{
  path: 'eventos',
  children: [
    {
      path: 'list',
      component: EventoListComponent
    },
    {
      path: ':id',
      component: EventoDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventoRoutingModule{}
