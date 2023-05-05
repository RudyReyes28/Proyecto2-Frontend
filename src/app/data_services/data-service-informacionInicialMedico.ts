import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Usuario } from "../modelos/usuario.model";
import { InfoInicialMedico } from "../modelos/infoinicialmedico.modelo";
@Injectable()
export class DataServiceInformacionInicialMedico{
    
    constructor(private httpClient: HttpClient){}

    urlBaseMedico = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/InformacionInicial';

    obtenerEspecialidades(){
        return this.httpClient.get(this.urlBaseMedico);
    }

    enviarInformacion(informacionInicial: InfoInicialMedico){
        return this.httpClient.post(this.urlBaseMedico, informacionInicial);
    }

    
}