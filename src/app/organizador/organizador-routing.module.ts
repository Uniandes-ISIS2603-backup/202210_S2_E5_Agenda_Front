import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { OrganizadorListComponent } from "./organizador-list/organizador-list.component";

const routes: Routes = [
  {
    path: 'organizador',
    children: [
      { path: 'list', component: OrganizadorListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrganizadorRoutingModule{}
