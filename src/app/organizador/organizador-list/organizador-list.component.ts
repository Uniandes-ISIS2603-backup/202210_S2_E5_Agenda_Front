import { Component, OnInit } from '@angular/core';
import { Organizador } from '../organizador';
import { OrganizadorService } from '../organizador.service';

@Component({
  selector: 'app-organizador-list',
  templateUrl: './organizador-list.component.html',
  styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {
  organizadores: Array<Organizador> =[];

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
