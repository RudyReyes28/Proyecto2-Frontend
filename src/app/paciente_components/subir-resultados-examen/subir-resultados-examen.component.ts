import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceSubirExamenesConsulta } from 'src/app/data_services/data-service-subirResultadoExamen';
import { Consulta } from 'src/app/modelos/consulta.model';

@Component({
  selector: 'app-subir-resultados-examen',
  templateUrl: './subir-resultados-examen.component.html',
  styleUrls: ['./subir-resultados-examen.component.css']
})
export class SubirResultadosExamenComponent implements OnInit {

  idPaciente: number;
  solicitudes: Consulta[];

  //PARA VER LA SOLICITUD
  idMedico =0;
  idConsulta = 0;
  indexSolicitud = 0;
  activarTabla = 0;

  constructor(private servicioExamen: DataServiceSubirExamenesConsulta,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    
    this.servicioExamen.obtenerSolicitudes(this.idPaciente)
    .subscribe(
      (solicitud: Consulta [])=>{
        this.solicitudes = solicitud;
      }
    );
  }

  verConsulta(idMedico: number, idConsulta: number, indexSolicitud: number){
    this.idMedico = idMedico;
    this.idConsulta = idConsulta;
    this.indexSolicitud = indexSolicitud;
    this.activarTabla = 1;

  }

  seleccionarArchivo(evento: any, idExamenSolicitado:number){
    let idExamen = idExamenSolicitado;
    const file = evento.target.files[0];

    // crear un objeto FormData
    const formData = new FormData();

    // agregar el archivo al objeto FormData
    formData.append('examenConsulta'+idExamen, file);

    this.servicioExamen.agregarExamenes(idExamen, formData)
    .subscribe(
      (solicitud: string )=>{
      console.log('Examen agregado');
    }
    );

  }

  regresar(){
    this.router.navigate(['paciente', this.idPaciente]);
  }


}
