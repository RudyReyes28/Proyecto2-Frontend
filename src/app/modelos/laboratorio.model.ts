import { TipoExamenLab } from "./tipoExamenLab.model";

export class Laboratorio {
    constructor(
      public idLaboratorio: number,
      public nombre: string,
      public usuario: string,
      public saldo: number,
      public examenes: TipoExamenLab[]
    ) {}
  }
  