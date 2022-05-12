import { Component, Input, OnInit } from '@angular/core';
import { ActividadDetail } from '../actividad-detail';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {

  constructor() { }


  @Input() actividadDetail!: ActividadDetail;


  ngOnInit() {
  }

}
