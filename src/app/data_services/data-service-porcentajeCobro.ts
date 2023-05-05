import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PorcentajeCobro } from "../modelos/porcentajeCobro.model";

@Injectable()
export class DataServicePorcentajeCobro{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/administrador/PorcentajeCobro';

    
    recibirPorcentajeActual(){
        return this.httpClient.get(this.urlBase);
    }

    enviarNuevoPorcentaje(nuevoPorcentaje: PorcentajeCobro){
        return this.httpClient.post(this.urlBase, nuevoPorcentaje);
    }
    
}