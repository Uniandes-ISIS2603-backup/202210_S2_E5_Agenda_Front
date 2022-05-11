import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {
  responsables: Array<Responsable> =[];
  eventos: Array<Evento>= [];
  selectedResponsable !: Responsable;
  selected: Boolean = false;

  constructor(private responsableService: ResponsableService) { }
  getResponsables(): void {
    this.responsableService.getResponsables().subscribe(responsables => {
      this.responsables = responsables;
    });
    }

  ngOnInit() {
    this.getResponsables();
  }

}
