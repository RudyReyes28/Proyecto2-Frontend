import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Usuario } from "../modelos/usuario.model";
@Injectable()
export class DataServicePrimerInicioSesion{
    
    constructor(private httpClient: HttpClient){}

    urlBaseMedico = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/verificar';
    urlBaseLab = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/verificar';

    verificarPrimerInicioMedico(usuario: Usuario){
        return this.httpClient.post(this.urlBaseMedico, usuario);
    }

    verificarPrimerInicioLab(usuario: Usuario){
        return this.httpClient.post(this.urlBaseLab, usuario);
    }
    
}