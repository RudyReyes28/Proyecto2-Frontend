import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Consulta } from "../modelos/consulta.model";
import { SolicitudExamen } from "../modelos/solicitudExamen.model";

@Injectable()
export class DataServiceVerConsultasMedico{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/VerConsultas';




    obtenerConsultas(idMedico: number){
        let url = this.urlBase+"/"+idMedico;
        return this.httpClient.get(url);
    }

    agregarExamenes(examenes: SolicitudExamen){
        return this.httpClient.post(this.urlBase, examenes);
    }

    finalizarConsulta(consulta: Consulta){
        return this.httpClient.put(this.urlBase, consulta);
    }
    
}