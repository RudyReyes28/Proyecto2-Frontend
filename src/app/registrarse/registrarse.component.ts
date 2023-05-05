import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceRegistrarse } from '../data_services/data-service-registrarse';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  
  tipoUsuarioInput: string;
  nombreInput: string;
  usuarioInput: string;
  contraseniaInput: string;
  direccionInput: string;
  CUIInput: number;
  telefonoInput: number;
  correoInput: string;
  fechaNacimientoInput: string;
  saldoInput: number;

  usuario: Usuario = null;

  constructor(private dataServiceRegistrar: DataServiceRegistrarse,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {}

  registrarUsuario(){
    const usuarioLogin = new Usuario(null, this.tipoUsuarioInput, this.nombreInput, this.usuarioInput, this.contraseniaInput,
       this.direccionInput, this.CUIInput, this.telefonoInput, this.correoInput, this.fechaNacimientoInput, 0);
  this.dataServiceRegistrar.registrarse(usuarioLogin).subscribe(
    (usuario: Usuario) => {
      this.usuario = usuario;
      if(this.usuario != null) {
        console.log('Se recibio el usuario con id: '+ this.usuario.idUsuario);
        //AQUI LLAMAMOS EL METODO DE MEDICO, PACIENTE, ADMINISTRADOR, LABORATORIO
        if(this.usuario.tipoUsuario === 'MEDICO'){
          //REDIRIGIR AL COMPONENTE DOCTOR CON EL USUARIO
          this.router.navigate(['medico', this.usuario.idUsuario]);
        } else if(this.usuario.tipoUsuario === 'PACIENTE'){
          //REDIRIGIR AL COMPONENTE PACIENTE CON EL USUARIO
          this.router.navigate(['paciente', this.usuario.idUsuario]);
        } else if(this.usuario.tipoUsuario === 'ADMINISTRADOR'){
          //REDIRIGIR AL COMPONENTE ADMINISTRADOR CON EL USUARIO
          this.router.navigate(['admin', this.usuario.idUsuario]);
        } else if(this.usuario.tipoUsuario === 'LABORATORIO'){
          //REDIRIGIR AL COMPONENTE LABORATORIO CON EL USUARIO
          this.router.navigate(['laboratorio', this.usuario.idUsuario]);
        }
      } else {
        //ANIADIR UNA ALERTA INDICANDOLE AL USUARIO QUE LOS DATOS NO SON CORRECTOS
        alert('Los datos ingresados son incorrectos. Por favor, inténtelo de nuevo.');
      }
    },
    (error) => console.log('Error en iniciar sesión: ' + error)
  );
  }
}
