import { Evento } from "../evento/evento";
import { Actividad } from "./actividad";

export class ActividadDetail extends Actividad {

    constructor(
      id:number,
      nombre:string,
      descripcion:string,
      dia:string,
      hora:string,
      duracion:string,
      evento: Evento
    ) {
      super(id, nombre, descripcion, dia, hora, duracion, evento)
    }
  }
