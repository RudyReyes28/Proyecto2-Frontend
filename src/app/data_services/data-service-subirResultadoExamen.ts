import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServiceSubirExamenesConsulta{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/SubirResultados';




    obtenerSolicitudes(idPaciente: number){
        let url = this.urlBase+"/"+idPaciente;
        return this.httpClient.get(url);
    }

    agregarExamenes(idExamenAsignado: number, examen: FormData){
        let url = this.urlBase+"/"+idExamenAsignado;
        return this.httpClient.post(url, examen);
    }

    
}