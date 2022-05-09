import { Component, OnInit } from '@angular/core';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {
  responsables: Array<Responsable> =[];

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
