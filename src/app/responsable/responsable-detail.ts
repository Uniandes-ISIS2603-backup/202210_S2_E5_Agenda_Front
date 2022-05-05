import { Responsable } from "../responsable/responsable";
import { Evento } from "../evento/evento";
export class ResponsableDetail extends Responsable {

eventos: Array<Evento>;

constructor(id:number,nombre:string,telefono:string,correo:string,cargo:string,eventos: Array<Evento>){
  super(id,nombre,telefono,correo,cargo);
  this.eventos = eventos;
}
}
