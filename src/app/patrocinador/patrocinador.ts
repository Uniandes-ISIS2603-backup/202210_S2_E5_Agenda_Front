export class Patrocinador{
  id: number;
  nombre: string;
  logoCompania: string;
  enlaceWeb: string;

    constructor(id: number, nombre: string, logoCompania: string, enlaceWeb: string){
      this.id = id;
      this.nombre = nombre;
      this.logoCompania = logoCompania;
      this.enlaceWeb = enlaceWeb;
    }
}
