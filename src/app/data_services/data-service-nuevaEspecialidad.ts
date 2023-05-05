import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Especialidad } from "../modelos/especialidad.model";
@Injectable()
export class DataServiceSolicitarNuevaEspecialidad{
    
    constructor(private httpClient: HttpClient){}

    urlBaseMedico = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/SolicitarEspecialidad';

    enviarInformacion(nuevaEspecialidad: Especialidad){
        return this.httpClient.post(this.urlBaseMedico, nuevaEspecialidad);
    }

    
}