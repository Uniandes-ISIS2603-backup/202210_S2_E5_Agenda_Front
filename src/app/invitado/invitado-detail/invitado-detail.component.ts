import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvitadoService } from '../invitado.service';
import { InvitadoDetail } from '../invitado-detail';

@Component({
  selector: 'app-invitado-detail',
  templateUrl: './invitado-detail.component.html',
  styleUrls: ['./invitado-detail.component.css']
})
export class InvitadoDetailComponent implements OnInit {

  invitadoId!: string;
  @Input() invitadoDetail!: InvitadoDetail;


  constructor(
    private route: ActivatedRoute,
    private invitadoService: InvitadoService
  ) {}


  getInvitado(){
    this.invitadoService.getInvitado(this.invitadoId).subscribe(invitado=>{
      this.invitadoDetail = invitado;
    })
  }
  ngOnInit() {
    if(this.invitadoDetail === undefined){
      this.invitadoId = this.route.snapshot.paramMap.get('id')!
      if (this.invitadoId) {
        this.getInvitado();
      }
    }
  }
}
