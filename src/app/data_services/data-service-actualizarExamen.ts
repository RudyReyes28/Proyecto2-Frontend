import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TipoExamenLab } from "../modelos/tipoExamenLab.model";

@Injectable()
export class DataServiceActualizarTipoExamen{
    
    constructor(private httpClient: HttpClient){}

    urlBase = 'http://localhost:8080/Proyecto2-IPC2-Backend/laboratorio/ActualizarExamen';

    obtenerExamenesLab(idLab: number){
        let url: string;
        url = this.urlBase+'/'+idLab;
        return this.httpClient.get(url);
    }
    
    nuevoTipoExamen(nuevoTipoExamen: TipoExamenLab){
        return this.httpClient.post(this.urlBase, nuevoTipoExamen);
    }

    modificarTipoExamen(examen: TipoExamenLab){
        return this.httpClient.put(this.urlBase, examen);
    }
}