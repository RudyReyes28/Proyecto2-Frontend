import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InfoInicialLab } from "../modelos/infoiniciallab.model";

@Injectable()
export class DataServiceInformacionInicialLab{
    
    constructor(private httpClient: HttpClient){}

    urlBaseLab = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/InformacionInicial';

    obtenerExamenes(){
        return this.httpClient.get(this.urlBaseLab);
    }

    enviarInformacion(informacionInicial: InfoInicialLab){
        return this.httpClient.post(this.urlBaseLab, informacionInicial);
    }

    
}