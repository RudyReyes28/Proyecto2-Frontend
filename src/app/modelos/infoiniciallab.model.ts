import { TipoExamenLab } from "./tipoExamenLab.model";

export class InfoInicialLab {
    constructor(
      public idLaboratorio: number,
      public examenes: TipoExamenLab[]
    ) {}
  }