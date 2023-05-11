import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConsultaExamenReporteAdmin } from "src/app/modelos/modeloReportes/consultareporteAdmin.model";

@Injectable()
export class DataServiceReportesAdmin{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/administrador/Reportes';




    obtenerPorcentajeCobro(){
        let url = this.urlBase+"/"+1;
        return this.httpClient.get(url);
    }

    obtenerTopMedicos(){
        let url = this.urlBase+"/"+2;
        return this.httpClient.get(url);
    }
    obtenerTopLaboratorios(){
        let url = this.urlBase+"/"+3;
        return this.httpClient.get(url);
    }
    obtenerTopConsultas(fechas: ConsultaExamenReporteAdmin){
        let url = this.urlBase+"/"+4;
        return this.httpClient.post(url, fechas);
    }

    obtenerTopExamenes(fechas: ConsultaExamenReporteAdmin){
        let url = this.urlBase+"/"+5;
        return this.httpClient.post(url, fechas);
    }
    
}