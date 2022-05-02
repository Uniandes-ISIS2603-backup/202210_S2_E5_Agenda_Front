import { Escenario } from "../escenario/escenario";
import { Evento } from "../evento/evento";


export class Multimedia {

  id : number;
  nombre : string;
  tipo : string;
  direccion : string;
  escenario: Escenario;
  evento: Evento;

  constructor(id: number, nombre: string, tipo: string, direccion: string, escenario: Escenario, evento: Evento){
    this.id=id;
    this.nombre=nombre;
    this.tipo = tipo;
    this.direccion = direccion;
    this.escenario = escenario;
    this.evento = evento;
  }

}
