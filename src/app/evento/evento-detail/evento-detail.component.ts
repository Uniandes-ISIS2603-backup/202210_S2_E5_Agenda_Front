import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventoDetail } from '../evento-detail';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  @Input() eventoDetail!: EventoDetail;

  constructor() { }

  ngOnInit() {
  }

}
