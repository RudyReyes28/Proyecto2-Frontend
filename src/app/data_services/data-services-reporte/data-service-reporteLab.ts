import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PacienteExReporteLab } from "src/app/modelos/modeloReportes/pacienteExLab.model";

@Injectable()
export class DataServiceReporteLaboratorio{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/reportes';


    
    obtenerTopPacientes(fechas: PacienteExReporteLab){
        let url = this.urlBase+"/"+1;
        return this.httpClient.post(url, fechas);
    }

    obtenerTopExamenes(fechas: PacienteExReporteLab){
        let url = this.urlBase+"/"+2;
        return this.httpClient.post(url, fechas);
    }
    
}