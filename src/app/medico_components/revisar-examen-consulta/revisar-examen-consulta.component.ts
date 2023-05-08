import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceRevisarExamenesConsulta } from 'src/app/data_services/data-service-revisarExamenConsulta';
import { Consulta } from 'src/app/modelos/consulta.model';
import { ExamenSolicitado } from 'src/app/modelos/examenSolicitado.model';

@Component({
  selector: 'app-revisar-examen-consulta',
  templateUrl: './revisar-examen-consulta.component.html',
  styleUrls: ['./revisar-examen-consulta.component.css']
})
export class RevisarExamenConsultaComponent implements OnInit {

  idMedico: number;
  consultas: Consulta[] = [];
  idConsulta: number;
  indexConsulta: number;
  activarTabla = 0;
  idPaciente: number;


  //PARA FINALIZAR LA CONSULTA
  informeConsulta = "";

  archivoURL: string;

  constructor(private servicioExamen: DataServiceRevisarExamenesConsulta,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMedico = this.route.snapshot.params['id'];
    
    this.servicioExamen.obtenerSolicitudes(this.idMedico)
    .subscribe(
      (consulta: Consulta [])=>{
        this.consultas = consulta;
      }
    );
  }

  verConsulta(idPaciente: number, idConsulta: number, indexConsulta: number){
    this.idPaciente = idPaciente;
    this.idConsulta = idConsulta;
    this.indexConsulta = indexConsulta;
    this.activarTabla = 1;
  }

  seleccionarArchivo(idExamenSolicitado: number){
    let examen = new ExamenSolicitado(null,null,null,null,null,null);
    this.servicioExamen.obtenerExamenes(idExamenSolicitado, examen).subscribe((archivo) => {
      
      const urlArchivo = URL.createObjectURL(archivo);
      const nuevaVentana = window.open(urlArchivo, '_blank');
      nuevaVentana.document.title = 'examen'+idExamenSolicitado+'.pdf';
    });

  }

  descargarExamen(idExamenSolicitado: number){
    let examen = new ExamenSolicitado(null,null,null,null,null,null);
    this.servicioExamen.obtenerExamenes(idExamenSolicitado, examen).subscribe((archivo) => {
      
      const urlArchivo = URL.createObjectURL(archivo);
      
      const a = document.createElement('a');
      a.href = urlArchivo;
      a.target = '_blank';
      a.download = 'examenConsulta'+idExamenSolicitado+'.pdf';
      document.body.appendChild(a);
      a.click();
       document.body.removeChild(a);


    });

  }

  enviarInforme(){
    let consultaFinal = new Consulta(this.idConsulta,this.idPaciente,this.idMedico,null,null,null,null,this.informeConsulta,null,null,null,null);
    this.servicioExamen.finalizarConsulta(consultaFinal)
    .subscribe(
      (consultas: Consulta)=>{
        console.log('Consulta agregada');
        this.router.navigate(['medico', this.idMedico]);
      }
    );
  }

  regresar(){
    this.router.navigate(['medico', this.idMedico]);
  }

}
