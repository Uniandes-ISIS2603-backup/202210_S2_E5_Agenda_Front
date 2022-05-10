import { Component, Input, OnInit } from '@angular/core';
import { Escenario } from '../escenario';
import { EscenarioDetail } from '../escenario-detail';

@Component({
  selector: 'app-escenario-detail',
  templateUrl: './escenario-detail.component.html',
  styleUrls: ['./escenario-detail.component.css']
})
export class EscenarioDetailComponent implements OnInit {

  @Input() escenarioDetail !: EscenarioDetail;

  constructor() { }

  ngOnInit() {
  }

}
