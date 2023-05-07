import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServiceSolicitudExamenPendiente{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/SolicitudExamenPendiente';




    obtenerSolicitudes(idLaboratorio: number){
        let url = this.urlBase+"/"+idLaboratorio;
        return this.httpClient.get(url);
    }

    agregarExamenes(idExamenAsignado: number, examen: FormData){
        let url = this.urlBase+"/"+idExamenAsignado;
        return this.httpClient.post(url, examen);
    }

    
}