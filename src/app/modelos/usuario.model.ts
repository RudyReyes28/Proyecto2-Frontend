export class Usuario{
    constructor(
        public idUsuario: number,
        public tipoUsuario: string,
        public nombre: string,
        public usuario: string,
        public contraseña: string,
        public direccion: string,
        public CUI: number,
        public telefono: number,
        public correo: string,
        public fechaNacimiento: string,
        public saldo: number
      ) {}

}