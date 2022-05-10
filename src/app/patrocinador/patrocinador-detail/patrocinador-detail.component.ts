import { Component, Input, OnInit } from '@angular/core';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-detail',
  templateUrl: './patrocinador-detail.component.html',
  styleUrls: ['./patrocinador-detail.component.css']
})
export class PatrocinadorDetailComponent implements OnInit {

  @Input() patrocinadorDetail! : Patrocinador;
  selectedPatrocinador!: Patrocinador
  selected= false;
  constructor() { }

  ngOnInit() {

  }
  onSelected(patrocinador: Patrocinador){
    this.selected=true;
    this.selectedPatrocinador= patrocinador;
  }

}
