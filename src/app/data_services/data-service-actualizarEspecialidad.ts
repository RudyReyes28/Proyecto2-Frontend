import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EspecialidadDelMedico } from "../modelos/especialidadMedico.model";
import { HorarioMedico } from "../modelos/horarioMedico.model";

@Injectable()
export class DataServiceActualizarEspecialidad{
    
    constructor(private httpClient: HttpClient){}

    urlBaseMedico = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/ActualizarEspecialidad';
    urlBaseHorario = 'http://localhost:8080/Proyecto2-IPC2-Backend/medico/ActualizarHorario';

    obtenerEspecialidadesMedico(idMedico: number){
        let url: string;
        url = this.urlBaseMedico+'/'+idMedico;
        return this.httpClient.get(url);
    }
    
    nuevaEspecialidad(nuevaEspecialidad: EspecialidadDelMedico){
        return this.httpClient.post(this.urlBaseMedico, nuevaEspecialidad);
    }

    modificarEspecialidad(especialidad: EspecialidadDelMedico){
        return this.httpClient.put(this.urlBaseMedico, especialidad);
    }

    obtenerHorarioMedico(idMedico: number){
        let url: string;
        url = this.urlBaseHorario+'/'+idMedico;
        return this.httpClient.get(url);
    }

    nuevoHorario(nuevoHorario: HorarioMedico){
        return this.httpClient.post(this.urlBaseHorario, nuevoHorario);
    }

    modificarHorario(horario: HorarioMedico){
        return this.httpClient.put(this.urlBaseHorario, horario);
    }

}