import { EspecialidadDelMedico } from "./especialidadMedico.model";
import { HorarioMedico } from "./horarioMedico.model";

export class InfoInicialMedico {
    constructor(
      public idMedico: number,
      public especialidades: EspecialidadDelMedico[],
      public horarios: HorarioMedico[]
    ) {}
  }