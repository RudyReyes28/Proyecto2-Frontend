import { ExamenSolicitado } from "./examenSolicitado.model";

export class SolicitudExamen {
    constructor(
      public idSolicitud: number,
      public idPaciente: number,
      public idLaboratorio: number,
      public porcentaje: number,
      public fecha_solicitado: string,
      public fecha_finalizado: string,
      public estado: string,
      public examenes: ExamenSolicitado[]
    ) {}
  }
  