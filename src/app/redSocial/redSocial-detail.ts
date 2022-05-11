import { redSocial } from "./redSocial";
import { Evento } from "../evento/evento";

export class RedSocialDetail extends redSocial {
  eventos: Array<Evento>;

  constructor(id: number, nombre: string, logoCompania: string, enlaceWeb: string, eventos: Array<Evento>) {
    super(id, nombre, logoCompania);
    this.eventos = eventos;
  }
}
