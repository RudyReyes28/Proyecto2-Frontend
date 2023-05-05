export class FechaConsulta {
    constructor(
      public idConsulta: number,
      public fecha: string,
      public idHorario: number,
      public horaInicial: string,
      public horaFinal: string,
      public estado: string,
      public idMedico: number
    ) {}
  }
  