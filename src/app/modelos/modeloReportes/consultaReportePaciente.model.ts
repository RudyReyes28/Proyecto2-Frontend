export class ConsultaReportePaciente {
    constructor(
    public idConsulta: number,
    public idMedico: number,
    public precio: number,
    public informe: string,
    public idPaciente: number,
    public fechaInicial: string,
    public fechaFinal: string,
    public estado: string,
    public idEspecialidad: number
    ) {}
}