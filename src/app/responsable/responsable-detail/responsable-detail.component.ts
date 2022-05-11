import { Component, Input, OnInit } from '@angular/core';
import { Responsable } from '../responsable';

@Component({
  selector: 'app-responsable-detail',
  templateUrl: './responsable-detail.component.html',
  styleUrls: ['./responsable-detail.component.css']
})
export class ResponsableDetailComponent implements OnInit {

  @Input() responsableDetail!: Responsable;
  selectedResponsable!: Responsable;
  selected = false;

  constructor() { }

  ngOnInit() {
  }
  onSelected(responsable:Responsable){
    this.selectedResponsable = responsable;
    this.selected = true;
  }

}
