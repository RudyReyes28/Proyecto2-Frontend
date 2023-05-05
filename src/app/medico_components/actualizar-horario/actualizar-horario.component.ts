import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceActualizarEspecialidad } from 'src/app/data_services/data-service-actualizarEspecialidad';
import { HorarioMedico } from 'src/app/modelos/horarioMedico.model';

@Component({
  selector: 'app-actualizar-horario',
  templateUrl: './actualizar-horario.component.html',
  styleUrls: ['./actualizar-horario.component.css']
})
export class ActualizarHorarioComponent implements OnInit {

  idMedico: number;
  horariosMedico: HorarioMedico [] = [];

  //PARA EL NUEVO HORARIO
  horaInicialInput: string;
  horaFinalInput: string;

  //PARA LA MODIFICACION DEl HORARIO
  modificarVerdadero = 0;
  idHorario = 0;
  modificarHoraInicial = '';
  modificarHoraFinal = '';
  
  constructor(
    private servicioActualizar: DataServiceActualizarEspecialidad,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.idMedico = this.route.snapshot.params['id'];

    this.servicioActualizar
      .obtenerHorarioMedico(this.idMedico)
      .subscribe((horarios: HorarioMedico[]) => {
        this.horariosMedico = horarios;
      });
  }

  registrarHorario(){
    let traslape = verificarTraslapeHoras(this.horaInicialInput, this.horaFinalInput, this.horariosMedico);
    
    if(traslape){
      alert('Este horario puede traslaparse');
    }else{
      const hora = new HorarioMedico(this.horaInicialInput, this.horaFinalInput, this.idMedico, null);
      this.servicioActualizar
      .nuevoHorario(hora)
      .subscribe((horario: HorarioMedico) => {
        console.log('Horario agregado');

        this.servicioActualizar
        .obtenerHorarioMedico(this.idMedico)
        .subscribe((horarios: HorarioMedico[]) => {
        this.horariosMedico = horarios;
        });
      });
    }

    
  }

  modificarHorario(idHorario: number){
    this.modificarVerdadero = 1;
    this.idHorario = idHorario;
  }

  enviarModificacion(){
    let traslape = verificarCambioHoras(this.modificarHoraInicial, this.modificarHoraFinal, this.horariosMedico, this.idHorario);
    
    if(traslape){
      alert('Este horario puede traslaparse');
    }else{
      const hora = new HorarioMedico(this.modificarHoraInicial, this.modificarHoraFinal, this.idMedico, this.idHorario);
      this.servicioActualizar
      .modificarHorario(hora)
      .subscribe((horario: HorarioMedico) => {
        console.log('Horario Modificado');
        this.modificarVerdadero = 0;
        this.modificarHoraFinal='';
        this.modificarHoraInicial = '';
        this.servicioActualizar
        .obtenerHorarioMedico(this.idMedico)
        .subscribe((horarios: HorarioMedico[]) => {
        this.horariosMedico = horarios;
        });
      });
    }

  }

  realizarCambios(){
    this.router.navigate(['medico', this.idMedico]);
  }


}

// Función que verifica si una nueva hora se traslapa con los horarios existentes
function verificarTraslapeHoras(horaInicialInput: string, horaFinalInput: string, horarios: HorarioMedico[]): boolean {
  // Convertir las horas a objetos Date
  const nuevaHoraInicial = new Date(`01/01/2000 ${horaInicialInput}`);
  const nuevaHoraFinal = new Date(`01/01/2000 ${horaFinalInput}`);

  // Recorrer los horarios existentes
  for (const horario of horarios) {
    // Convertir las horas del horario a objetos Date
    const horaInicial = new Date(`01/01/2000 ${horario.horaInicial}`);
    const horaFinal = new Date(`01/01/2000 ${horario.horaFinal}`);

    // Verificar si hay traslape
    if (nuevaHoraInicial >= horaInicial && nuevaHoraInicial < horaFinal) {
      return true; // Existe traslape
    }
    if (nuevaHoraFinal > horaInicial && nuevaHoraFinal <= horaFinal) {
      return true; // Existe traslape
    }
  }

  return false; // No hay traslape
}

function verificarCambioHoras(horaInicialInput: string, horaFinalInput: string, horarios: HorarioMedico[], idHorario: number): boolean {
  // Convertir las horas a objetos Date
  const nuevaHoraInicial = new Date(`01/01/2000 ${horaInicialInput}`);
  const nuevaHoraFinal = new Date(`01/01/2000 ${horaFinalInput}`);

  // Recorrer los horarios existentes
  for (const horario of horarios) {

    
      // Convertir las horas del horario a objetos Date
    const horaInicial = new Date(`01/01/2000 ${horario.horaInicial}`);
    const horaFinal = new Date(`01/01/2000 ${horario.horaFinal}`);

    // Verificar si hay traslape
    if (nuevaHoraInicial >= horaInicial && nuevaHoraInicial < horaFinal) {
      if(idHorario === horario.idHorario){
        return false;
      }else{
        return true;// Existe traslape
      }
       
    }
    if (nuevaHoraFinal > horaInicial && nuevaHoraFinal <= horaFinal) {
      if(idHorario === horario.idHorario){
        return false;
      }else{
        return true;// Existe traslape
      }
    }

    
    
  }

  return false; // No hay traslape
}
