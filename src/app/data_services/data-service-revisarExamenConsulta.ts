import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Consulta } from "../modelos/consulta.model";
import { ExamenSolicitado } from "../modelos/examenSolicitado.model";

@Injectable()
export class DataServiceRevisarExamenesConsulta{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/RevisarExamenes';




    obtenerSolicitudes(idMedico: number){
        let url = this.urlBase+"/"+idMedico;
        return this.httpClient.get(url);
    }

    obtenerExamenes(idExamenAsignado: number, examen: ExamenSolicitado): Observable<any>{
        let url = this.urlBase+"/"+idExamenAsignado;
        return this.httpClient.post(url, examen, { responseType: 'blob' });
    }

    finalizarConsulta(consulta: Consulta){
        return this.httpClient.put(this.urlBase, consulta);
    }
    
}