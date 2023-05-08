import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceAgendarConsulta } from 'src/app/data_services/data-service-agendarConsulta';
import { DataServiceInformacionInicialMedico } from 'src/app/data_services/data-service-informacionInicialMedico';
import { Consulta } from 'src/app/modelos/consulta.model';
import { Especialidad } from 'src/app/modelos/especialidad.model';
import { FechaConsulta } from 'src/app/modelos/fechaConsulta.model';
import { HorarioMedico } from 'src/app/modelos/horarioMedico.model';
import { Medico } from 'src/app/modelos/medico.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent implements OnInit {

  //Paciente
  paciente: Usuario;
  idPaciente: number;

  //PARA FILTRAR LOS Medicos
  medicoInput = "";
  especialidadInput = 0;
  activarTabla = 0;

  //Para realizar la consulta
  idMedicoInput = 0;
  idEspecialidadInput = 0;
  precioInput = 0;
  activarHorarios=0;
  activarTablaHorarios=0;
  idFechaInput = "";

  //ESPECIALIDADES PARA FILTRAR
  especialidades: Especialidad [];

  //HORARIOS PARA AGENDAR
  horarioMedico: HorarioMedico [] = [];

  //MEDICOS
  medicos: Medico[] = [];

  constructor(private servicioEspecialidades: DataServiceInformacionInicialMedico,
    private servicioPaciente: DataServiceAgendarConsulta,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.idPaciente = this.route.snapshot.params['id'];

    this.servicioEspecialidades.obtenerEspecialidades()
    .subscribe(
      (especialidades: Especialidad [])=>{
        this.especialidades = especialidades;
      }
    );

    this.servicioPaciente.obtenerPaciente(this.idPaciente)
    .subscribe(
      (paciente: Usuario)=>{
        this.paciente = paciente;
        console.log(paciente.saldo);
      }
    );
  
    this.servicioPaciente.obtenerMedicos()
    .subscribe(
      (medico: Medico [])=>{
        this.medicos = medico;
      }
    );

  }

  buscarMedico(){
    this.especialidadInput = 0;
    this.activarTabla = 1;

  }

  buscarEspecialidad(){
    console.log('especialidad '+this.especialidadInput);
    this.medicoInput = "";
    this.activarTabla = 1;

  }

  agendarMedico(idMedico: number, idEspecialidad: number, precio: number){
    this.idMedicoInput = idMedico;
    this.idEspecialidadInput = idEspecialidad;
    this.precioInput = precio;

    //AHORA AQUI MOSTRAMOS EL FORMULARIO DE HORARIOS
    this.activarHorarios = 1;

  }

  verHorarios(){
      let verHoras = new FechaConsulta(null, this.idFechaInput, null, null, null, null, this.idMedicoInput);

    this.servicioPaciente.obtenerHorarios(verHoras)
    .subscribe(
      (horarios: HorarioMedico [])=>{
        this.horarioMedico = horarios;
        this.activarTablaHorarios =1;
      }
    );
  }

  agendarConsulta(idHorario: number, horaInicial: string, horaFinal: string){

    if(this.paciente.saldo > this.precioInput){
      let fechaConsulta = new FechaConsulta(null,this.idFechaInput,idHorario, horaInicial, horaFinal, null, this.idMedicoInput);
      let consulta = new Consulta(null, this.idPaciente, this.idMedicoInput, this.idEspecialidadInput, null, null, this.precioInput, null, null, fechaConsulta, null,null);
      
      this.servicioPaciente.agendarConsulta(consulta)
    .subscribe(
      (consulta: Consulta)=>{
        console.log('Consulta agendada');
        this.router.navigate(['paciente', this.idPaciente]);
      }
    );

    }else{
      alert('Su saldo es insuficiente para agendar esta consulta');
    }
    

  }


  regresar(){
    this.router.navigate(['paciente', this.idPaciente]);
  }


}
