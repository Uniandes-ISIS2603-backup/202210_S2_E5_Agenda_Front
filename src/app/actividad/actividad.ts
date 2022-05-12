import { Evento } from "../evento/evento";

export class Actividad{
id:number;
nombre:string;
descripcion:string;
dia:string;
hora:string;
duracion:string;
evento: Evento;
constructor(id:number,nombre:string, descripcion:string, dia:string,hora:string, duracion:string,evento: Evento){
    this.id=id;
    this.descripcion=descripcion;
    this.dia=dia;
    this.duracion=duracion;
    this.nombre=nombre;
    this.hora=hora;
    this.evento=evento;
  }
}

