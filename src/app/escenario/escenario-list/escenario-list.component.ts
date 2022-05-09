import { Component, OnInit } from '@angular/core';
import { Escenario } from '../escenario';
import { EscenarioService } from '../escenario.service';


@Component({
  selector: 'app-escenario-list',
  templateUrl: './escenario-list.component.html',
  styleUrls: ['./escenario-list.component.css']
})
export class EscenarioListComponent implements OnInit {

  escenarios: Array<Escenario> = [];


  constructor(private escenarioService: EscenarioService) { }

  getEscenarios(): void {
    this.escenarioService.getEscenarios().subscribe(escenarios => {  this.escenarios = escenarios; });
  }
  ngOnInit() {

    this.getEscenarios();

  }

}
