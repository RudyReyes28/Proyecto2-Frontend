export class PacienteExReporteLab {
    constructor(
      public idLaboratorio: number,
      public nombre: string,
      public cantidadExamenes: number,
      public total: number,
      public fechaInicial: string,
      public fechaFinal: string
    ) {}
  }
  