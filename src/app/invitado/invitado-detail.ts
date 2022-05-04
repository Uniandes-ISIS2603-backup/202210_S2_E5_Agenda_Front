import { Invitado } from "./invitado";
import { Evento } from "../evento/evento";

export class InvitadoDetail extends Invitado {
  eventos: Array<Evento>;

  constructor(id: number, nombre: string, logoCompania: string, enlaceWeb: string, eventos: Array<Evento>) {
    super(id, nombre, logoCompania, enlaceWeb);
    this.eventos = eventos;
  }
}
