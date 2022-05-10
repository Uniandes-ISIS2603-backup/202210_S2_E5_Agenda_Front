import { Actividad } from "../actividad/actividad";
import { Escenario } from "../escenario/escenario";
import { Invitado } from "../invitado/invitado";
import { Multimedia } from "../multimedia/multimedia";
import { Organizador } from "../organizador/organizador";
import { Patrocinador } from "../patrocinador/patrocinador";
import { Responsable } from "../responsable/responsable";
import { Evento } from "./evento";

export class EventoDetail extends Evento{
  actividades: Array<Actividad> = [];
	invitados: Array<Invitado> = [];
  multimedias: Array<Multimedia> = [];
  organizadores: Array<Organizador> = [];
	patrocinadores:  Array<Patrocinador> = [];

  constructor(
    id: number,
    nombre: string,
    categoria: string,
    descripcion: string,
    fechaDeInicio: any,
    fechaDeFin: any,
    detalles: string,
    capacidadMax: number,
    imagen: string,
    responsable: Responsable,
    escenario: Escenario,
    organizadores: Array<Organizador>,
	  patrocinadores:  Array<Patrocinador>,
    multimedias: Array<Multimedia>,
    actividades: Array<Actividad>,
	  invitados: Array<Invitado>
  ){
    super(id, nombre,categoria,descripcion,fechaDeInicio,fechaDeFin,detalles,capacidadMax,imagen,responsable,escenario);
    this.organizadores = organizadores;
    this.patrocinadores = patrocinadores;
    this.multimedias = multimedias;
    this.invitados = invitados;
    this.actividades = actividades;
  }
}
