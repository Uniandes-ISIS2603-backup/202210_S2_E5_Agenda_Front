import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { Organizador } from '../organizador';
import { OrganizadorService } from '../organizador.service';

@Component({
  selector: 'app-organizador-list',
  templateUrl: './organizador-list.component.html',
  styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {
  organizadores: Array<Organizador> =[];
  eventos: Array<Evento>= [];

  constructor(private organizadorService: OrganizadorService) {}
  getOrganizadores(): void {
  this.organizadorService.getOrganizadores().subscribe(organizadores => {
    this.organizadores = organizadores;
  });
  }

  ngOnInit() {
    this.getOrganizadores();
  }

}
