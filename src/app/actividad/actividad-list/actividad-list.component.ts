import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  actividades :Array<Actividad>=[];
  constructor(private servicioActividad:ActividadService) { }

  getActividades(): void {
    this.servicioActividad.getActividades().subscribe((actividades)=>{this.actividades=actividades});

}
  ngOnInit() {
    this.getActividades();
  }
}
