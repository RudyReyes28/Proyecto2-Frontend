import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceReporteLaboratorio } from 'src/app/data_services/data-services-reporte/data-service-reporteLab';
import { PacienteExReporteLab } from 'src/app/modelos/modeloReportes/pacienteExLab.model';

@Component({
  selector: 'app-reportes-laboratorio',
  templateUrl: './reportes-laboratorio.component.html',
  styleUrls: ['./reportes-laboratorio.component.css']
})
export class ReportesLaboratorioComponent implements OnInit {

  idLaboratorio: number;
  activarFomularioP = 0;
  activarFormularioE = 0;

  fechaInicial: string;
  fechaFinal: string;


  tablaPaciente = 0;
  tablaExamen = 0;

  reportesPacienteEsp: PacienteExReporteLab[] = [];

  constructor(private reportes: DataServiceReporteLaboratorio,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idLaboratorio = this.route.snapshot.params['id'];
  }

  activarFormularioPaciente(){
    this.activarFomularioP = 1;
    this.activarFormularioE = 0;
    this.tablaPaciente = 0;
    this.tablaExamen = 0;
  }

  activarFormularioExamen(){
    this.activarFomularioP = 0;
    this.activarFormularioE = 1;
    this.tablaPaciente = 0;
    this.tablaExamen = 0;
  }

  obtenerPacientes(){
    let paciente = new PacienteExReporteLab(this.idLaboratorio,null,null,null,this.fechaInicial,this.fechaFinal);
    this.reportes.obtenerTopPacientes(paciente)
    .subscribe(
      (pacientes: PacienteExReporteLab [])=>{
        this.reportesPacienteEsp = pacientes;
        this.tablaPaciente = 1;
        this.tablaExamen = 0;
      }
    );
  }

  obtenerExamenes(){
    let examen = new PacienteExReporteLab(this.idLaboratorio,null,null,null,this.fechaInicial,this.fechaFinal);
    this.reportes.obtenerTopExamenes(examen)
    .subscribe(
      (examenes: PacienteExReporteLab [])=>{
        this.reportesPacienteEsp = examenes;
        this.tablaPaciente = 0;
        this.tablaExamen = 1;
      }
    );
  }

  regresarLab(){
    this.router.navigate(['laboratorio', this.idLaboratorio]);
  }

}
