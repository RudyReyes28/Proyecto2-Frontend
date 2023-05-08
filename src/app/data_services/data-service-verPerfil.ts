import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServiceVerPerfil{
    
    constructor(private httpClient: HttpClient){}

    urlBaseMedico = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/VerPerfil';
    urlBaseAdmin = 'http://localhost:8080/Proyecto2-IPC2-Backend/administrador/VerPerfil';
    urlBaseLab = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/VerPerfil';
    urlBasePaciente = 'http://localhost:8080/Proyecto2-IPC2-Backend/paciente/VerPerfil';



    obtenerPerfilAdmin(idUsuario: number){
        let url = this.urlBaseAdmin+"/"+idUsuario;
        return this.httpClient.get(url);
    }

    obtenerPerfilMedico(idUsuario: number){
        let url = this.urlBaseMedico+"/"+idUsuario;
        return this.httpClient.get(url);
    }

    obtenerPerfilLab(idUsuario: number){
        let url = this.urlBaseLab+"/"+idUsuario;
        return this.httpClient.get(url);
    }

    obtenerPerfilPaciente(idUsuario: number){
        let url = this.urlBasePaciente+"/"+idUsuario;
        return this.httpClient.get(url);
    }


    
}