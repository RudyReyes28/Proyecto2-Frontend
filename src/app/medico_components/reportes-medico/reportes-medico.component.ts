import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceReportesMedico } from 'src/app/data_services/data-services-reporte/data-service-reporteMedico';
import { PacienteEspReporteMedico } from 'src/app/modelos/modeloReportes/pacienteEspMedico.model';

@Component({
  selector: 'app-reportes-medico',
  templateUrl: './reportes-medico.component.html',
  styleUrls: ['./reportes-medico.component.css']
})
export class ReportesMedicoComponent implements OnInit {

  idMedico: number;
  activarFomularioP = 0;
  activarFormularioE = 0;

  fechaInicial: string;
  fechaFinal: string;


  tablaPaciente = 0;
  tablaEspecialidad = 0;

  reportesPacienteEsp: PacienteEspReporteMedico [] = [];

  constructor(private reportes: DataServiceReportesMedico,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMedico = this.route.snapshot.params['id'];
  }

  activarFormularioPaciente(){
    this.activarFomularioP = 1;
    this.activarFormularioE = 0;
    this.tablaPaciente = 0;
    this.tablaEspecialidad = 0;
  }

  activarFormularioEspecialidad(){
    this.activarFomularioP = 0;
    this.activarFormularioE = 1;
    this.tablaPaciente = 0;
    this.tablaEspecialidad = 0;
  }

  obtenerPacientes(){
    let paciente = new PacienteEspReporteMedico(this.idMedico,null,null,null,this.fechaInicial,this.fechaFinal);
    this.reportes.obtenerTopPacientes(paciente)
    .subscribe(
      (pacientes: PacienteEspReporteMedico [])=>{
        this.reportesPacienteEsp = pacientes;
        this.tablaPaciente = 1;
        this.tablaEspecialidad = 0;
      }
    );
  }

  obtenerEspecialidades(){
    let paciente = new PacienteEspReporteMedico(this.idMedico,null,null,null,this.fechaInicial,this.fechaFinal);
    this.reportes.obtenerTopEspecialidades(paciente)
    .subscribe(
      (especialidades: PacienteEspReporteMedico [])=>{
        this.reportesPacienteEsp = especialidades;
        this.tablaPaciente = 0;
        this.tablaEspecialidad = 1;
      }
    );
  }

  regresarMedico(){
    this.router.navigate(['medico', this.idMedico]);
  }

}
