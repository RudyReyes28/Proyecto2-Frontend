export class RecargaPaciente {
    constructor(
      public idRecarga: number,
      public idPaciente: number,
      public fecha: string,
      public monto: number
    ) {}
  }
  