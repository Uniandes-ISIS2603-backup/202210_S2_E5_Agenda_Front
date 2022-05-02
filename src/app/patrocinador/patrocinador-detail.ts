import { Patrocinador } from "./patrocinador";
import { Evento } from "../evento/evento";

export class PatrocinadorDetail extends Patrocinador {
  eventos: Array<Evento>;

  constructor(id: number, nombre: string, logoCompania: string, enlaceWeb: string, eventos: Array<Evento>) {
    super(id, nombre, logoCompania, enlaceWeb);
    this.eventos = eventos;
  }
}
