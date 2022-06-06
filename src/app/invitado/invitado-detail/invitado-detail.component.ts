import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invitado } from '../invitado';
import { InvitadoService } from '../invitado.service';

@Component({
  selector: 'app-invitado-detail',
  templateUrl: './invitado-detail.component.html',
  styleUrls: ['./invitado-detail.component.css']
})
export class InvitadoDetailComponent implements OnInit {

  invitadoId!: string;
  @Input() invitadoDetail!: Invitado;
  selectedInvitado!: Invitado;
  selected = false;

  constructor(private route: ActivatedRoute,
    private invitadoService: InvitadoService) { }


  onSelected(invitado: Invitado) {
    this.selected = true;
    this.selectedInvitado = invitado;
  }
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
