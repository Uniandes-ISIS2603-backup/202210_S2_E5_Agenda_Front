export class Evento{
	id: number;
	nombre: string;
	categoria: string;
	descripcion: string;
  fechaDeInicio: any;
	fechaDeFin: any;
	detalles: string;
	capacidadMax: number;
	//responsable: Responsable;
	//escenario: Escenario;

  constructor(
    id: number,
    nombre: string,
    categoria: string,
    descripcion: string,
    fechaDeInicio: any,
    fechaDeFin: any,
    detalles: string,
    capacidadMax: number
  )
  {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.fechaDeInicio = fechaDeInicio;
    this.fechaDeFin = fechaDeFin;
    this.detalles = detalles;
    this.capacidadMax = capacidadMax;
  }
}
