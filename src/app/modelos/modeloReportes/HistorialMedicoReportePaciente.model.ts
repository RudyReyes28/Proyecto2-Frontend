import { ExamenSolicitado } from "../examenSolicitado.model";

export class HistorialMedicoReportePaciente {
    constructor(
    public idConsulta: number,
    public idPaciente: number,
    public idMedico: number,
    public idEspecialidad: number,
    public precio: number,
    public informe: string,
    public estado: string,
    public examenes: ExamenSolicitado[],
    public fechaInicial: string,
    public fechaFinal: string
    ) {}
}