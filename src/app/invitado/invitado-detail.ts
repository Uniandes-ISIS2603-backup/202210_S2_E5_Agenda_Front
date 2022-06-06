import { Invitado } from "./invitado";
import { Evento } from "../evento/evento";

export class InvitadoDetail extends Invitado {
  eventos: Array<Evento>;

  constructor(id: number, nombre: string, fotografia: string, biografia: string,eventos:Array<Evento>) {
    super(id, nombre, fotografia, biografia);
    this.eventos = eventos;
  }
}
