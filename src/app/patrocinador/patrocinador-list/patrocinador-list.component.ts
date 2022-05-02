import { Component, OnInit } from '@angular/core';
import { PatrocinadorService } from '../patrocinador.service';
import { PatrocinadorDetail } from '../patrocinador-detail';

@Component({
  selector: 'app-patrocinador-list',
  templateUrl: './patrocinador-list.component.html',
  styleUrls: ['./patrocinador-list.component.css']
})
export class PatrocinadorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
