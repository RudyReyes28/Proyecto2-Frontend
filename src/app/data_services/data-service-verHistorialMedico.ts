import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ExamenSolicitado } from "../modelos/examenSolicitado.model";

@Injectable()
export class DataServiceVerHistorialMedico{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/VerHistorial';



    obtenerSolicitudes(){
        return this.httpClient.get(this.urlBase);
    }

    obtenerExamenes(idExamenAsignado: number, examen: ExamenSolicitado): Observable<any>{
        let url = this.urlBase+"/"+idExamenAsignado;
        return this.httpClient.post(url, examen, { responseType: 'blob' });
    }

    
}