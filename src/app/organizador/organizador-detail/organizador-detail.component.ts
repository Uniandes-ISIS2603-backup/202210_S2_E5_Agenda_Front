import { Component, Input, OnInit } from '@angular/core';
import { Organizador } from '../organizador';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

  @Input() organizadorDetail!: Organizador;
  selectedOrganizador!: Organizador;
  selected=false;

  constructor() { }

  ngOnInit() {
  }
  onSelected(organizador: Organizador){
    this.selected=true;
    this.selectedOrganizador = organizador;
  }
}
