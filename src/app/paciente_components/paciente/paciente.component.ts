import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  idPaciente: number;
  constructor(private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
     this.idPaciente = this.route.snapshot.params['id'];
  }

  realizarRecarga(){
    this.router.navigate(['paciente/Recarga', this.idPaciente]);
  }

  agendarConsulta(){
    this.router.navigate(['paciente/AgendarConsulta', this.idPaciente]);
  }

  solicitarExamen(){
    this.router.navigate(['paciente/SolicitarExamen', this.idPaciente]);
  }

  resultadosExamen(){
    this.router.navigate(['paciente/VerResultados', this.idPaciente]);
  }

  subirExamenes(){
    this.router.navigate(['paciente/SubirResultados', this.idPaciente]);
  }
}
