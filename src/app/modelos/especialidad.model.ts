
export class Especialidad{
    constructor(
        public idEspecialidad: number,
        public nombre: string,
        public descripcion: string,
        public estado: string,
        public idMedico: number
    ) {}
}