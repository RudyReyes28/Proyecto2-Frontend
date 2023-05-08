import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ExamenSolicitado } from "../modelos/examenSolicitado.model";

@Injectable()
export class DataServiceResultadoExamenesPaciente{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/VerResultados';




    obtenerSolicitudes(idPaciemte: number){
        let url = this.urlBase+"/"+idPaciemte;
        return this.httpClient.get(url);
    }

    obtenerExamenes(idExamenAsignado: number, examen: ExamenSolicitado): Observable<any>{
        let url = this.urlBase+"/"+idExamenAsignado;
        return this.httpClient.post(url, examen, { responseType: 'blob' });
    }

    
}