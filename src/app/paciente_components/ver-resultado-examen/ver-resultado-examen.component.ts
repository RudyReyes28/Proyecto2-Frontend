import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceResultadoExamenesPaciente } from 'src/app/data_services/data-service-resultadoExamenPaciente';
import { ExamenSolicitado } from 'src/app/modelos/examenSolicitado.model';
import { SolicitudExamen } from 'src/app/modelos/solicitudExamen.model';

@Component({
  selector: 'app-ver-resultado-examen',
  templateUrl: './ver-resultado-examen.component.html',
  styleUrls: ['./ver-resultado-examen.component.css']
})
export class VerResultadoExamenComponent implements OnInit {

  idPaciente: number;
  solicitudes: SolicitudExamen[] = [];
  idSolicitud: number;
  indexSolicitud: number;
  activarTabla = 0;
  idLaboratorio: number;

  archivoURL: string;


  constructor(private servicioExamen: DataServiceResultadoExamenesPaciente,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.idPaciente = this.route.snapshot.params['id'];
    
    this.servicioExamen.obtenerSolicitudes(this.idPaciente)
    .subscribe(
      (solicitud: SolicitudExamen [])=>{
        this.solicitudes = solicitud;
        console.log(solicitud);
      }
    );
  }

  verSolicitud(idLaboratorio: number, idSolicitud: number, indexSolicitud: number){
    this.idLaboratorio = idLaboratorio;
    this.idSolicitud = idSolicitud;
    this.indexSolicitud = indexSolicitud;
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
      a.download = 'examen'+idExamenSolicitado+'.pdf';
      document.body.appendChild(a);
      a.click();
       document.body.removeChild(a);


    });

  }


  regresar(){
    this.router.navigate(['paciente', this.idPaciente]);
  }

}
