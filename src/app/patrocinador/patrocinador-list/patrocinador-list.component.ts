import { Component, OnInit } from '@angular/core';
import { PatrocinadorService } from '../patrocinador.service';
import { PatrocinadorDetail } from '../patrocinador-detail';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-list',
  templateUrl: './patrocinador-list.component.html',
  styleUrls: ['./patrocinador-list.component.css']
})
export class PatrocinadorListComponent implements OnInit {

  patrocinadores: Array<Patrocinador> = [];


  constructor(private patrocinadorService: PatrocinadorService) { }

  getPatrocinadores(): void {
    this.patrocinadorService.getPatrocinadores().subscribe(patrocinadores => {  this.patrocinadores = patrocinadores; });
  }
  ngOnInit() {

    this.getPatrocinadores();

  }

}
