import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organizador } from '../organizador';
import { OrganizadorService } from '../organizador.service';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

  organizadorId!: string;

  @Input() organizadorDetail!: Organizador;
  selectedOrganizador!: Organizador;
  selected=false;

  constructor(
    private route: ActivatedRoute,
    private organizadorService: OrganizadorService
  ) { }

  getOrganizador(){
    this.organizadorService.getOrganizador(this.organizadorId).subscribe(organizador=>{
      this.organizadorDetail = organizador;
    })
  }

   ngOnInit() {
    if(this.organizadorDetail === undefined){
      this.organizadorId = this.route.snapshot.paramMap.get('id')!
      if (this.organizadorId) {
        this.getOrganizador();
      }
    }
  }
  onSelected(organizador: Organizador){
    this.selected=true;
    this.selectedOrganizador = organizador;
  }
}
