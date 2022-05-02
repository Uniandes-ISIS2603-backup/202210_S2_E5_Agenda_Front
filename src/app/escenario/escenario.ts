export class Escenario {

  id : number;
  nombre : string;
  tipo : string;
  aforoPermitido : number;

  constructor(id: number, nombre: string, tipo: string, aforoPermitido: number){
    this.id=id;
    this.nombre=nombre;
    this.tipo = tipo;
    this.aforoPermitido = aforoPermitido;
  }

}
