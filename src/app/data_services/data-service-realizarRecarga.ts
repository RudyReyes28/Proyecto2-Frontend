import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecargaPaciente } from "../modelos/recargaPaciente.model";

@Injectable()
export class DataServiceRealizarRecarga{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/Recarga';



    solicitarRecarga(nuevaRecarga: RecargaPaciente){
        return this.httpClient.post(this.urlBase, nuevaRecarga);
    }
    
}