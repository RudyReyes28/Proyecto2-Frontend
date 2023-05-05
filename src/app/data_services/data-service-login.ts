import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Usuario } from "../modelos/usuario.model";
@Injectable()
export class DataServiceLogin{
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/login';

    iniciarSesion(usuario: Usuario){
        return this.httpClient.post(this.urlBase, usuario);
    }
}