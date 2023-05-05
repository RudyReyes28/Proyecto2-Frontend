import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Consulta } from "../modelos/consulta.model";
import { FechaConsulta } from "../modelos/fechaConsulta.model";

@Injectable()
export class DataServiceAgendarConsulta{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/AgendarConsulta';



    obtenerMedicos(){
        return this.httpClient.get(this.urlBase);
    }

    obtenerPaciente(idPaciente: number){
        let url = this.urlBase+"/"+idPaciente;
        return this.httpClient.get(url);
    }

    agendarConsulta(consulta: Consulta){
        return this.httpClient.post(this.urlBase, consulta);
    }

    obtenerHorarios(horario: FechaConsulta){
        return this.httpClient.put(this.urlBase, horario);
    }
    
}