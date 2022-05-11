import { Component, OnInit } from '@angular/core';
import { Escenario } from '../escenario';
import { EscenarioDetail } from '../escenario-detail';
import { EscenarioService } from '../escenario.service';


@Component({
  selector: 'app-escenario-list',
  templateUrl: './escenario-list.component.html',
  styleUrls: ['./escenario-list.component.css']
})
export class EscenarioListComponent implements OnInit {

  escenarios: Array<EscenarioDetail> = [];
  selected: Boolean = false;
  selectedEscenario!: EscenarioDetail;


  constructor(private escenarioService: EscenarioService) { }

  getEscenarios(): void {
    this.escenarioService.getEscenarios().subscribe({next: escenarios =>   this.escenarios = escenarios, error: e => console.error(e) });
  }


  onSelected(escenario: EscenarioDetail):void{
    this.selected = true;
    this.selectedEscenario = escenario;
  }


  ngOnInit() {

    this.getEscenarios();

  }

}
