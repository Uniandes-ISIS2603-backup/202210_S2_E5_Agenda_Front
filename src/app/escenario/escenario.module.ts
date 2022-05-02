import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenarioListComponent } from './escenario-list/escenario-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EscenarioListComponent],
  declarations: [EscenarioListComponent]
})
export class EscenarioModule {  }
