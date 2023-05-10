import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceLogin } from '../data_services/data-service-login';
import { Usuario } from '../modelos/usuario.model';
import { UsuarioService } from '../model_services/usuario-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
  usuarioInput: string;
  contraseniaInput: string;

  usuario: Usuario = null;
  constructor(private dataServiceLogin: DataServiceLogin,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
/*
  iniciarSesion(usuarioLogin: Usuario){
    console.log('persona a agregar' + usuarioLogin.usuario);
    this.dataServiceLogin.iniciarSesion(usuarioLogin)
    .subscribe(
        (usuarioRecibido: Usuario)=>{
            if(usuarioRecibido != null){
              console.log('Se recibio el usuario con id: '+ usuarioRecibido.idUsuario);
            }
            
            this.usuario = usuarioRecibido;
        }
    )
 }*/

 onIniciarSesion() {
  const usuarioLogin = new Usuario(0, null, null, this.usuarioInput, this.contraseniaInput, null, 0, 0, null, null, 0);
  this.dataServiceLogin.iniciarSesion(usuarioLogin).subscribe(
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

cargarDatos(){
  this.router.navigate(['cargarDatos']);
}

}
