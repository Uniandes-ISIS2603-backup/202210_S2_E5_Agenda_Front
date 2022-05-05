export class Responsable{
id:number;
nombre: string;
telefono: string;
correo:string;
cargo:string;

constructor(id: number, nombre: string, telefono:string,correo:string,cargo:string){
this.id = id;
this.nombre = nombre;
this.telefono = telefono;
this.correo = correo;
this.cargo = cargo;
}
}
