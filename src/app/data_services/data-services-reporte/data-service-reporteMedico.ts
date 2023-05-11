import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PacienteEspReporteMedico } from "src/app/modelos/modeloReportes/pacienteEspMedico.model";

@Injectable()
export class DataServiceReportesMedico{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/reportes';


    
    obtenerTopPacientes(fechas: PacienteEspReporteMedico){
        let url = this.urlBase+"/"+1;
        return this.httpClient.post(url, fechas);
    }

    obtenerTopEspecialidades(fechas: PacienteEspReporteMedico){
        let url = this.urlBase+"/"+2;
        return this.httpClient.post(url, fechas);
    }
    
}