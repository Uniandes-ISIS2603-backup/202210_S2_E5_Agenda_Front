import { Multimedia } from "./multimedia";
import { Escenario } from "../escenario/escenario";
import { Evento } from "../evento/evento";

export class MultimediaDetail extends Multimedia{

  constructor(id: number, nombre: string, tipo: string, direccion: string, escenario:Escenario, evento: Evento)
  {
    super(id, nombre, tipo, direccion, escenario, evento);
  }
}
