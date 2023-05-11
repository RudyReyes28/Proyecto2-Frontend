import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceInformacionInicialLab } from 'src/app/data_services/data-service-infoInicialLab';
import { DataServiceInformacionInicialMedico } from 'src/app/data_services/data-service-informacionInicialMedico';
import { DataServiceReportesPaciente } from 'src/app/data_services/data-services-reporte/data-service-reportePaciente';
import { Especialidad } from 'src/app/modelos/especialidad.model';
import { ConsultaReportePaciente } from 'src/app/modelos/modeloReportes/consultaReportePaciente.model';
import { ExamenesReportePaciente } from 'src/app/modelos/modeloReportes/examenReportePaciente.model';
import { HistorialMedicoReportePaciente } from 'src/app/modelos/modeloReportes/HistorialMedicoReportePaciente.model';
import { RecargaPaciente } from 'src/app/modelos/recargaPaciente.model';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';

@Component({
  selector: 'app-reportes-paciente',
  templateUrl: './reportes-paciente.component.html',
  styleUrls: ['./reportes-paciente.component.css']
})
export class ReportesPacienteComponent implements OnInit {

  idPaciente: number;

  //LISTADO DE ESPECIALIDADES Y EXAMENES
  escogerEspecialidades: Especialidad[];
  escogerExamenes: TipoExamen[];

  //TABLAS
  activarTablaHistorial=0;
  activarTablaRecargas = 0;
  activarTablaConsultas = 0;
  activarTablaExamenes = 0;

  //INFORMACION TABLA
  reporteRecargas: RecargaPaciente[] = [];
  reporteHistorial: HistorialMedicoReportePaciente [] = [];
  reporteConsultas: ConsultaReportePaciente [] =  [];
  reporteExamenes: ExamenesReportePaciente [] = [];

  //FORMULARIOS
  formularioHistorial = 0;
  formularioConsultas = 0;
  formularioExamen = 0;

  //VARIABLES
  fechaInicial: string;
  fechaFinal: string;
  idEspecialidad: number;
  idExamen: number;

  

  constructor(private especialidadesListado: DataServiceInformacionInicialMedico,
    private examenesListado: DataServiceInformacionInicialLab,
    private reportes: DataServiceReportesPaciente,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idPaciente = this.route.snapshot.params['id'];

    this.especialidadesListado.obtenerEspecialidades()
      .subscribe((especialidades: Especialidad[]) => {
        this.escogerEspecialidades = especialidades;
      });

      this.examenesListado.obtenerExamenes()
      .subscribe(
        (examenes: TipoExamen [])=>{
          this.escogerExamenes = examenes;
        }
      );  
  }

  activarHistorial(){
    this.formularioHistorial = 1;
    this.formularioConsultas = 0;
    this.formularioExamen = 0;
    
    this.activarTablaHistorial=0;
    this.activarTablaRecargas = 0;
    this.activarTablaConsultas = 0;
    this.activarTablaExamenes = 0;
    
  }

  desactivarTablas(){
    this.activarTablaHistorial=0;
    this.activarTablaRecargas = 0;
    this.activarTablaConsultas = 0;
    this.activarTablaExamenes = 0;
  }

  activarConsultas(){
    this.formularioHistorial = 0;
    this.formularioConsultas = 1;
    this.formularioExamen = 0;
    
    this.activarTablaHistorial=0;
    this.activarTablaRecargas = 0;
    this.activarTablaConsultas = 0;
    this.activarTablaExamenes = 0;

  }

  activarExamenes(){
    this.formularioHistorial = 0;
    this.formularioConsultas = 0;
    this.formularioExamen = 1;
    
    this.activarTablaHistorial=0;
    this.activarTablaRecargas = 0;
    this.activarTablaConsultas = 0;
    this.activarTablaExamenes = 0;

  }

  obtenerRecargas(){
    let recarga = new RecargaPaciente(null, this.idPaciente, null, null);
    this.reportes.obtenerRecargas(recarga)
    .subscribe(
      (recargas: RecargaPaciente [])=>{
        this.reporteRecargas = recargas;
        
        this.activarTablaHistorial=0;
        this.activarTablaConsultas = 0;
        this.activarTablaExamenes = 0;
        this.activarTablaRecargas = 1;
      }
    );
  }

  obtenerHistorial(){
    let paciente = new HistorialMedicoReportePaciente(null, this.idPaciente, null, null, null, null, null,null, this.fechaInicial,this.fechaFinal);
    this.reportes.obtenerHistorialMedico(paciente)
    .subscribe(
      (historial: HistorialMedicoReportePaciente [])=>{
        this.reporteHistorial = historial;
        
        
        this.activarTablaRecargas = 0;
        this.activarTablaConsultas = 0;
        this.activarTablaExamenes = 0;
        this.activarTablaHistorial = 1;
      }
    );
  }

  obtenerConsultas(){
    let paciente = new ConsultaReportePaciente(null, null, null, null, this.idPaciente, this.fechaInicial, this.fechaFinal, null, this.idEspecialidad);
    this.reportes.obtenerConsultas(paciente)
    .subscribe(
      (historial: ConsultaReportePaciente [])=>{
        this.reporteConsultas = historial;
        this.activarTablaHistorial=0;
        this.activarTablaRecargas = 0;
        this.activarTablaExamenes = 0;
        this.activarTablaConsultas = 1;
      }
    );

  }

  obtenerExamenes(){
    let paciente = new ExamenesReportePaciente(null, null,null,null,this.idPaciente,this.fechaInicial,this.fechaFinal,null,this.idExamen);
    this.reportes.obtenerExamenes(paciente)
    .subscribe(
      (historial: ExamenesReportePaciente [])=>{
        this.reporteExamenes = historial;
        this.activarTablaHistorial=0;
        this.activarTablaRecargas = 0;
        this.activarTablaConsultas = 0;
        this.activarTablaExamenes = 1;
      }
    );
  }

  regresarPaciente(){
    this.router.navigate(['paciente', this.idPaciente]);
  }

}
