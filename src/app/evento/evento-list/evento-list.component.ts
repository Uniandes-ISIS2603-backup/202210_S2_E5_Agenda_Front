import { Component, OnInit } from '@angular/core';
import { Organizador } from 'src/app/organizador/organizador';
import { Patrocinador } from 'src/app/patrocinador/patrocinador';
import { Evento } from '../evento';
import { EventoDetail } from '../evento-detail';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  eventos: Array<EventoDetail> = [];
  selected: Boolean = false;
  selectedEvento!: EventoDetail;

  constructor(private eventoService: EventoService) { }

  getEventos(): void {
    this.eventoService.getEventos().subscribe({next: eventos => this.eventos = eventos , error: e => console.error(e)});
  }

  onSelected(evento: EventoDetail):void{
    this.selected = true;
    this.selectedEvento = evento;
  }

  ngOnInit() {
    this.getEventos();
  }

  filtrarPorCategoria(categoria:String): Array<Evento> {
    let filtro:Array<Evento> = Array<Evento>();

    this.eventos.forEach(evento => {
      if (evento.categoria === categoria) {
        filtro.push(evento);
      }
    });
    return filtro;
  }

  filtrarPorFecha(fechaInicio:String, fechaFin: String): Array<Evento> {
    let filtro:Array<Evento> = Array<Evento>();

    this.eventos.forEach(evento => {
      if (evento.fechaDeInicio >= fechaInicio && evento.fechaDeFin <= fechaFin) {
        filtro.push(evento);
      }
    });
    return filtro;
  }

  //Filtrado eventos por patrocinador
  buscarPorPatrocinador(nombrePatrocinador:String): Array<Evento>
  {
    let resp: Array<Evento> = Array<Evento>();

    this.eventos.forEach(evento =>
      {
        let act: Array<Patrocinador> = evento.patrocinadores;
        act.forEach(patrocinador => {
            if (patrocinador.nombre == nombrePatrocinador)
            {
              resp.push(evento);
            }
          }
          )

      });
    return resp;
  }

  //Filtrado de evento por organizador
  buscarPorOrganizador(nombreOrganizador:String): Array<Evento>
  {
    let resp: Array<Evento> = Array<Evento>();

    this.eventos.forEach(evento =>
      {
        let act: Array<Organizador> = evento.organizadores;
        act.forEach(organizador => {
            if (organizador.nombre == nombreOrganizador)
            {
              resp.push(evento);
            }
          }
          )

      });
    return resp;
  }


}
