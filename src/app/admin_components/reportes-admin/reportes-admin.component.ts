import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceReportesAdmin } from 'src/app/data_services/data-services-reporte/data-service-reportesAdmin';
import { ConsultaExamenReporteAdmin } from 'src/app/modelos/modeloReportes/consultareporteAdmin.model';
import { LabReporteAdmin } from 'src/app/modelos/modeloReportes/labReporteAdmin.model';
import { MedicoReporteAdmin } from 'src/app/modelos/modeloReportes/medicoReporteAdmin.model';
import { PorcentajeCobro } from 'src/app/modelos/porcentajeCobro.model';

@Component({
  selector: 'app-reportes-admin',
  templateUrl: './reportes-admin.component.html',
  styleUrls: ['./reportes-admin.component.css']
})
export class ReportesAdminComponent implements OnInit {

  idAdmin: number;
  activarFomularioC = 0;
  activarFormularioE = 0;

  reportesPorcentaje: PorcentajeCobro [] = [];
  reportesMedico: MedicoReporteAdmin [] = [];
  reportesLab: LabReporteAdmin [] = [];
  reportesCE: ConsultaExamenReporteAdmin;

  fechaInicial: string;
  fechaFinal: string;


  tablaPorcentaje = 0;
  tablaMedico = 0;
  tablaLab = 0;
  tablaCE = 0;

  constructor(private reportes: DataServiceReportesAdmin,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAdmin = this.route.snapshot.params['id'];
  }

  obtenerPorcentajes(){
    this.reportes.obtenerPorcentajeCobro()
    .subscribe(
      (porcentajes: PorcentajeCobro [])=>{
        this.reportesPorcentaje = porcentajes;
        this.tablaMedico = 0;
        this.tablaPorcentaje = 1;
        this.tablaLab = 0;
        this.activarFomularioC = 0;
        this.activarFormularioE = 0;
        this.tablaCE = 0;
      }
    );
  }


  obtenerMedicos(){
    this.reportes.obtenerTopMedicos()
    .subscribe(
      (medicos: MedicoReporteAdmin [])=>{
        this.reportesMedico = medicos;
        this.tablaMedico = 1;
        this.tablaPorcentaje = 0;
        this.tablaLab = 0;
        this.tablaCE = 0;
        this.activarFomularioC = 0;
        this.activarFormularioE = 0;
      }
    );
  }

  obtenerLaboratorios(){
    this.reportes.obtenerTopLaboratorios()
    .subscribe(
      (laboratorios: LabReporteAdmin [])=>{
        this.reportesLab = laboratorios;
        this.tablaMedico = 0;
        this.tablaPorcentaje = 0;
        this.tablaLab = 1;
        this.tablaCE = 0;
        this.activarFomularioC = 0;
        this.activarFormularioE = 0;
      }
    );

  }

  obtenerConsulta(){
    let nuevaConsulta = new ConsultaExamenReporteAdmin(this.fechaInicial, this.fechaFinal, null,null,null);
    this.reportes.obtenerTopConsultas(nuevaConsulta)
    .subscribe(
      (consultas: ConsultaExamenReporteAdmin)=>{
        this.reportesCE = consultas;
        this.tablaMedico = 0;
        this.tablaPorcentaje = 0;
        this.tablaLab = 0;
        this.tablaCE = 1;
        this.activarFomularioC = 0;
        this.activarFormularioE = 0;
      }
    );
  }

  obtenerExamen(){
    let nuevaConsulta = new ConsultaExamenReporteAdmin(this.fechaInicial, this.fechaFinal, null,null,null);
    this.reportes.obtenerTopExamenes(nuevaConsulta)
    .subscribe(
      (consultas: ConsultaExamenReporteAdmin)=>{
        this.reportesCE = consultas;
        this.tablaMedico = 0;
        this.tablaPorcentaje = 0;
        this.tablaLab = 0;
        this.tablaCE = 1;
        this.activarFomularioC = 0;
        this.activarFormularioE = 0;
      }
    );
  }

  regresarAdmin(){
    this.router.navigate(['admin', this.idAdmin]);
  }

}
