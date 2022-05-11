import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { redSocial } from '../redSocial';
import { redSocialService } from '../redSocial.service';

@Component({
  selector: 'app-redSocial-list',
  templateUrl: './redSocial-list.component.html',
  styleUrls: ['./redSocial-list.component.css']
})
export class RedSocialListComponent implements OnInit {
  redesSociales: Array<redSocial> = [];
  eventos: Array<Evento> = [];
  selectedRedSocial!: redSocial;
  selected: Boolean = false;

  constructor(private redSocialService: redSocialService) { }
  getRedesSociales(): void {
    this.redSocialService.getRedesSociales().subscribe(redesSociales => {
      this.redesSociales = redesSociales;
    });
  }

  ngOnInit() {
    this.getRedesSociales();
  }

}
