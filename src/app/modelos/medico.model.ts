import { EspecialidadDelMedico } from "./especialidadMedico.model";

export class Medico {
    constructor(
      public idMedico: number,
      public nombre: string,
      public usuario: string,
      public saldo: number,
      public especialidad: EspecialidadDelMedico[]
    ) {}
  }
  