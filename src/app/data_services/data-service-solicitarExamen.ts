import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SolicitudExamen } from "../modelos/solicitudExamen.model";

@Injectable()
export class DataServiceSolicitarExamen{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/SolicitarExamen';



    obtenerLaboratorios(){
        return this.httpClient.get(this.urlBase);
    }

    obtenerPaciente(idPaciente: number){
        let url = this.urlBase+"/"+idPaciente;
        return this.httpClient.get(url);
    }

    agendarExamenes(examenes: SolicitudExamen){
        return this.httpClient.post(this.urlBase, examenes);
    }

    
}