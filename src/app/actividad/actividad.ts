export class Actividad{
id:number;
nombre:string;
descripcion:string;
dia:string;
hora:string;
duracion:string;
constructor(id:number,nombre:string, descripcion:string, dia:string,hora:string, duracion:string){
    this.id=id;
    this.descripcion=descripcion;
    this.dia=dia;
    this.duracion=duracion;
    this.nombre=nombre;
    this.hora=hora;
  }
}

