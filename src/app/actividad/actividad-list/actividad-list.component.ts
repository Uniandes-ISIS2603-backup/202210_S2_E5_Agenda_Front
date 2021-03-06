import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadDetail } from '../actividad-detail';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  selected: Boolean = false;
  selectedActividad!: ActividadDetail;

  onSelected(escenario: ActividadDetail):void{
    this.selected = true;
    this.selectedActividad = escenario;
  }



  actividades :Array<Actividad>=[];
  constructor(private servicioActividad:ActividadService) { }

  getActividades(): void {
    this.servicioActividad.getActividades().subscribe((actividades)=>{this.actividades=actividades});

}
  ngOnInit() {
    this.getActividades();
  }
}
