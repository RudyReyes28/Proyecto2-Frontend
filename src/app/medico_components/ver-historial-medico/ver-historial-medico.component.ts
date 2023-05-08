import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceVerHistorialMedico } from 'src/app/data_services/data-service-verHistorialMedico';
import { Consulta } from 'src/app/modelos/consulta.model';
import { ExamenSolicitado } from 'src/app/modelos/examenSolicitado.model';

@Component({
  selector: 'app-ver-historial-medico',
  templateUrl: './ver-historial-medico.component.html',
  styleUrls: ['./ver-historial-medico.component.css']
})
export class VerHistorialMedicoComponent implements OnInit {

  idMedico: number;
  idPaciente =0;
  activarTabla = 0;
  consultas: Consulta[] = [];
  idConsulta: number;
  indexConsulta: number;
  
  consultasFiltradas: Consulta[] = [];

  constructor(private servicioExamen: DataServiceVerHistorialMedico,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idMedico = this.route.snapshot.params['id'];
    
    this.servicioExamen.obtenerSolicitudes()
    .subscribe(
      (consulta: Consulta [])=>{
        this.consultas = consulta;
        this.consultasFiltradas = consulta;
      }
    );
  }

  buscarPaciente(){
    this.consultasFiltradas = this.consultas.filter(
      consulta => consulta.idPaciente == this.idPaciente
    );

    if(this.activarTabla===1){
      this.activarTabla=0;
    }
  }

  verConsulta(idConsulta: number, indexConsulta: number){
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

  regresar(){
    this.router.navigate(['medico', this.idMedico]);
  }

}
