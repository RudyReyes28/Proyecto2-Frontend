import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceSolicitudExamenPendiente } from 'src/app/data_services/data-service-solicitudExamenPendiente';
import { SolicitudExamen } from 'src/app/modelos/solicitudExamen.model';

@Component({
  selector: 'app-ver-solicitud-examen',
  templateUrl: './ver-solicitud-examen.component.html',
  styleUrls: ['./ver-solicitud-examen.component.css']
})
export class VerSolicitudExamenComponent implements OnInit {
  idLaboratorio: number;
  solicitudes: SolicitudExamen[];

  //PARA VER LA SOLICITUD
  idPaciente =0;
  idSolicitud = 0;
  indexSolicitud = 0;
  activarTabla = 0;

  constructor(private servicioExamen: DataServiceSolicitudExamenPendiente,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idLaboratorio = this.route.snapshot.params['id'];
    
    this.servicioExamen.obtenerSolicitudes(this.idLaboratorio)
    .subscribe(
      (solicitud: SolicitudExamen [])=>{
        this.solicitudes = solicitud;
        console.log(solicitud);
      }
    );

  }


  verSolicitud(idPaciente: number, idSolicitud: number, indexSolicitud: number){
    this.idPaciente = idPaciente;
    this.idSolicitud = idSolicitud;
    this.indexSolicitud = indexSolicitud;
    this.activarTabla = 1;

  }

  seleccionarArchivo(evento: any, idExamenSolicitado:number){
    let idExamen = idExamenSolicitado;
    console.log(idExamen);
    const file = evento.target.files[0];

    // crear un objeto FormData
    const formData = new FormData();

    // agregar el archivo al objeto FormData
    formData.append('examen'+idExamen, file);

    this.servicioExamen.agregarExamenes(idExamen, formData)
    .subscribe(
      (solicitud: string )=>{
      console.log('se supone que debe de llamar a esa madre');
    }
    );

  }

  regresar(){
    this.router.navigate(['laboratorio', this.idLaboratorio]);
  }

}
