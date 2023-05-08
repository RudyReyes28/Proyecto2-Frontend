import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceActualizarTipoExamen } from 'src/app/data_services/data-service-actualizarExamen';
import { DataServiceInformacionInicialLab } from 'src/app/data_services/data-service-infoInicialLab';
import { DataServiceVerConsultasMedico } from 'src/app/data_services/data-service-verConsultasMedico';
import { Consulta } from 'src/app/modelos/consulta.model';
import { ExamenSolicitado } from 'src/app/modelos/examenSolicitado.model';
import { SolicitudExamen } from 'src/app/modelos/solicitudExamen.model';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';

@Component({
  selector: 'app-ver-consultas',
  templateUrl: './ver-consultas.component.html',
  styleUrls: ['./ver-consultas.component.css']
})
export class VerConsultasComponent implements OnInit {

  
  idMedico: number;
  idPaciente: number;
  idConsulta: number;
  //PARA BUSCAR AL PACIENTE
  fechaInput= "";
  //ACTIVACION DE FORMULARIOS
  activarFinalizarConsulta = 0;
  activarAgregarExamen = 0;

  //PARA FINALIZAR LA CONSULTA
  informeConsulta = "";
  nombrePaciente="";

  //PARA LOS EXAMENES
  idExamenInput = 0;
  examenesConsulta: ExamenSolicitado [] = [];


  consultasAgendadas: Consulta [];
  consultasFiltradas: Consulta[] = [];
  escogerExamenes: TipoExamen[];

  constructor(private examenesListado: DataServiceInformacionInicialLab,
    private servicioConsultas: DataServiceVerConsultasMedico,
    private servicioActualizar: DataServiceActualizarTipoExamen,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMedico = this.route.snapshot.params['id'];

    this.servicioConsultas.obtenerConsultas(this.idMedico)
    .subscribe(
      (consultas: Consulta [])=>{
        this.consultasAgendadas = consultas;
        this.consultasFiltradas = this.consultasAgendadas;
      }
    );

    this.examenesListado.obtenerExamenes()
    .subscribe(
      (examenes: TipoExamen [])=>{
        this.escogerExamenes = examenes;
      }
    );
  }

  filtrarConsultas() {
    this.consultasFiltradas = this.consultasAgendadas.filter(
      consulta => consulta.fechaAgendada.fecha == this.fechaInput
    );
  }

  finalizarConsulta(idPaciente: number, idConsulta: number, nombrePaciente: string){
    this.idPaciente = idPaciente;
    this.idConsulta = idConsulta;
    this.nombrePaciente = nombrePaciente;
    this.activarFinalizarConsulta = 1;

  }

  enviarInforme(){
    let consultaFinal = new Consulta(this.idConsulta,this.idPaciente,this.idMedico,null,null,null,null,this.informeConsulta,null,null,null,null);
    this.servicioConsultas.finalizarConsulta(consultaFinal)
    .subscribe(
      (consultas: Consulta)=>{
        console.log('Consulta agregada');
        this.router.navigate(['medico', this.idMedico]);
      }
    );
  }

  asignarExamen(idPaciente: number, idConsulta: number){
    this.idPaciente = idPaciente;
    this.idConsulta = idConsulta;
    this.activarAgregarExamen = 1;
  }

  registrarExamen(){
    let examen = new ExamenSolicitado(null,null,this.idConsulta,this.idExamenInput,null,null);
    this.examenesConsulta.push(examen);
  
  }

  enviarExamenes(){
    let solicitud = new SolicitudExamen(null,this.idPaciente,null,null,null,null,null,this.examenesConsulta);
    this.servicioConsultas.agregarExamenes(solicitud)
    .subscribe(
      (examen: SolicitudExamen)=>{
        console.log('Examens agregados');
        this.router.navigate(['medico', this.idMedico]);
      }
    );
  }

  regresar(){
    this.router.navigate(['medico', this.idMedico]);
  }

}
