import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TipoExamen } from "../modelos/tipoExamen.model";

@Injectable()
export class DataServiceSolicitarNuevoExamen{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/SolicitarExamen';

    enviarInformacion(nuevoExamen: TipoExamen){
        return this.httpClient.post(this.urlBase, nuevoExamen);
    }

    
}