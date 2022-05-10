import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenarioListComponent } from './escenario-list/escenario-list.component';
import { EscenarioDetailComponent } from './escenario-detail/escenario-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EscenarioListComponent],
  declarations: [EscenarioListComponent, EscenarioDetailComponent]
})
export class EscenarioModule {  }
