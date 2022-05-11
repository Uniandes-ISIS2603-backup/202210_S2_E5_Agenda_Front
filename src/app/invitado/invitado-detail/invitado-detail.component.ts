import { Component, Input, OnInit } from '@angular/core';
import { Invitado } from '../invitado';

@Component({
  selector: 'app-invitado-detail',
  templateUrl: './invitado-detail.component.html',
  styleUrls: ['./invitado-detail.component.css']
})
export class InvitadoDetailComponent implements OnInit {

  @Input() invitadoDetail!: Invitado;
  selectedInvitado!: Invitado;
  selected = false;

  constructor() { }

  ngOnInit() {
  }
  onSelected(invitado: Invitado) {
    this.selected = true;
    this.selectedInvitado = invitado;
  }
}
