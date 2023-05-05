import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario.model";

@Injectable()
export class DataServiceRegistrarse{

    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/registrarse';

    registrarse(usuario: Usuario){
        return this.httpClient.post(this.urlBase, usuario);
    }
}