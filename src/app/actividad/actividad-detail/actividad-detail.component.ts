import { Component, Input, OnInit } from '@angular/core';
import { ActividadDetail } from '../actividad-detail';
import { ActivatedRoute } from '@angular/router';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})


export class ActividadDetailComponent implements OnInit {

  actividadId!: string;
  @Input() actividadDetail!: ActividadDetail;

  constructor(
    private route: ActivatedRoute,
    private actividadService: ActividadService
  ) {}

  getActividad(){
    this.actividadService.getActividad(this.actividadId).subscribe(actividad=>{
      this.actividadDetail = actividad;
    })
  }

  ngOnInit() {
    if(this.actividadDetail === undefined){
      this.actividadId = this.route.snapshot.paramMap.get('id')!
      if (this.actividadId) {
        this.getActividad();
      }
    }
  }
}
