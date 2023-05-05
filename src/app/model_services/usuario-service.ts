import { Injectable } from "@angular/core";
import { DataServiceLogin } from "../data_services/data-service-login";
import { Usuario } from "../modelos/usuario.model";

@Injectable()
export class UsuarioService{
     usuario: Usuario = null;

     constructor(private dataServiceLogin: DataServiceLogin){}

     iniciarSesion(usuarioLogin: Usuario){
        console.log('persona a agregar' + usuarioLogin.usuario);
        this.dataServiceLogin.iniciarSesion(usuarioLogin)
        .subscribe(
            (usuarioRecibido: Usuario)=>{
                console.log('Se recibio el usuario con id: '+ usuarioRecibido.idUsuario);
                this.usuario = usuarioRecibido;
            }
        )
     }
}