import { FechaConsulta } from "./fechaConsulta.model";

export class Consulta {
    constructor(
      public idConsulta: number,
      public idPaciente: number,
      public idMedico: number,
      public idEspecialidad: number,
      public porcentajeApp: number,
      public fechaCreacion: string,
      public precio: number,
      public informe: string,
      public estado: string,
      public fechaAgendada: FechaConsulta
    ) {}
  }
  