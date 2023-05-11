import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConsultaReportePaciente } from "src/app/modelos/modeloReportes/consultaReportePaciente.model";
import { ExamenesReportePaciente } from "src/app/modelos/modeloReportes/examenReportePaciente.model";
import { HistorialMedicoReportePaciente } from "src/app/modelos/modeloReportes/HistorialMedicoReportePaciente.model";
import { RecargaPaciente } from "src/app/modelos/recargaPaciente.model";

@Injectable()
export class DataServiceReportesPaciente{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/reportes';


    
    obtenerHistorialMedico(fechas: HistorialMedicoReportePaciente){
        let url = this.urlBase+"/"+1;
        return this.httpClient.post(url, fechas);
    }

    obtenerRecargas(paciente: RecargaPaciente){
        let url = this.urlBase+"/"+2;
        return this.httpClient.post(url, paciente);
    }

    obtenerConsultas(fechas: ConsultaReportePaciente){
        let url = this.urlBase+"/"+3;
        return this.httpClient.post(url, fechas);
    }

    obtenerExamenes(fechas: ExamenesReportePaciente){
        let url = this.urlBase+"/"+4;
        return this.httpClient.post(url, fechas);
    }
    
}