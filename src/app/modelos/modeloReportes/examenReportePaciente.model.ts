export class ExamenesReportePaciente {
    constructor(
      public idSolicitud: number,
      public idLaboratorio: number,
      public idExamenSolicitado: number,
      public precio: number,
      public idPaciente: number,
      public fechaInicial: string,
      public fechaFinal: string,
      public estado: string,
      public idExamen: number
    ) {}
  }
  