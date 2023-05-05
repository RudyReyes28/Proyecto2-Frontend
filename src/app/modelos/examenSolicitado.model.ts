export class ExamenSolicitado {
    constructor(
      public idSolicitud: number,
      public idConsulta: number,
      public idExamen: number,
      public precio: number,
      public resultado: string
    ) {}
  }
  