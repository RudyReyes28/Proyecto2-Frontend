export class PacienteEspReporteMedico {
    constructor(
      public idMedico: number,
      public nombre: string,
      public cantidadConsultas: number,
      public total: number,
      public fechaInicial: string,
      public fechaFinal: string
    ) {}
  }
  