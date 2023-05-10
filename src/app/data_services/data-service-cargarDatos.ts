import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServiceCargarDatos{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/cargarDatos';


    agregarExamenes(archivoEntrada: FormData){

        return this.httpClient.post(this.urlBase, archivoEntrada);
    }

    
}