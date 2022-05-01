import { Escenario } from "./escenario";
import { Multimedia } from "../multimedia/multimedia";
import { Evento } from "../evento/evento";

export class EscenarioDetail extends Escenario{

  multimedias: Array<Multimedia> = [];
  eventos: Array<Evento> = [];


  constructor(id: number, nombre: string, tipo: string, aforoPermitido: number, multimedias: Array<Multimedia>, eventos: Array<Evento>)
  {
    super(id, nombre, tipo, aforoPermitido);
    this.multimedias = multimedias;
    this.eventos = eventos;
  }

}
