export class Escenario {

  id : number;
  nombre : string;
  tipo : TipoEscenario;
  aforoPermitido : number;

  constructor(id: number, nombre: string, tipo: TipoEscenario, aforoPermitido: number){
    this.id=id;
    this.nombre=nombre;
    this.tipo = tipo;
    this.aforoPermitido = aforoPermitido;
  }

}

export enum TipoEscenario {
  'AULA',
  'AUDITORIO',
  'PLAZOLETA'
}
