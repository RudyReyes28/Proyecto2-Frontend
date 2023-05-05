import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Especialidad } from "../modelos/especialidad.model";
import { TipoExamen } from "../modelos/tipoExamen.model";
@Injectable()
export class DataServiceResivionAdmin{
    
    constructor(private httpClient: HttpClient){}

    urlBaseEspecialidad= 'http://localhost:8080/Proyecto2-IPC2-Backend/administrador/RevisionEspecialidad';
    
    urlBaseExamen= 'http://localhost:8080/Proyecto2-IPC2-Backend/administrador/RevisionExamen';

    enviarInformacionEspecialidad(nuevaEspecialidad: Especialidad){
        return this.httpClient.put(this.urlBaseEspecialidad, nuevaEspecialidad);
    }

    recibirEspecialidad(){
        return this.httpClient.get(this.urlBaseEspecialidad);
    }

    enviarInformacionExamen(nuevoExamen: TipoExamen){
        return this.httpClient.put(this.urlBaseExamen, nuevoExamen);
    }

    recibirExamen(){
        return this.httpClient.get(this.urlBaseExamen);
    }
    
}