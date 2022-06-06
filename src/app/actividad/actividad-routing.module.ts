import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { ActividadListComponent } from './actividad-list/actividad-list.component';


const routes: Routes = [{
  path: 'actividades',
  children: [
    {
      path: 'list',
      component: ActividadListComponent
    },
    {
      path: ':id',
      component: ActividadDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
