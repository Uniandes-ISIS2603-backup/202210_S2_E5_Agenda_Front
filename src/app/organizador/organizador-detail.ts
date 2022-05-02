import { Organizador } from "./organizador";
import { Evento } from "../evento/evento";

export class OrganizadorDetail extends Organizador {
  eventos: Array<Evento>;

  constructor(id: number, nombre: string, logoCompania: string, enlaceWeb: string, eventos: Array<Evento>) {
    super(id, nombre, logoCompania, enlaceWeb);
    this.eventos = eventos;
  }
}
