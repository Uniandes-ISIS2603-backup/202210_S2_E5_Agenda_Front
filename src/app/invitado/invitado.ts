export class Invitado{

  id: number;
  nombre: string;
  fotografia: string;
  biografia: string;

  constructor(id: number, nombre: string, fotografia: string, biografia: string) {
    this.id = id;
    this.nombre = nombre;
    this.fotografia = fotografia;
    this.biografia = biografia;
  }
}

