import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceSolicitarNuevaEspecialidad } from 'src/app/data_services/data-service-nuevaEspecialidad';
import { Especialidad } from 'src/app/modelos/especialidad.model';


@Component({
  selector: 'app-solicitar-especialidad',
  templateUrl: './solicitar-especialidad.component.html',
  styleUrls: ['./solicitar-especialidad.component.css']
})
export class SolicitarEspecialidadComponent implements OnInit {

  idMedico: number;
  nombreInput: string;
  descripcionInput: string;

  constructor(private nuevaEspecialidad: DataServiceSolicitarNuevaEspecialidad, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.idMedico = this.route.snapshot.params['id'];
  }

  solicitarEspecialidad(){
    const especialidad = new Especialidad(null,this.nombreInput,this.descripcionInput,null,this.idMedico);
    this.nuevaEspecialidad.enviarInformacion(especialidad)
    .subscribe(
      (objeto: Object) => {
        const info = objeto as Especialidad;
        console.log('se agrega la especialidad '+ info.nombre);
        this.router.navigate(['medico', this.idMedico]);
      }
    );
  }



}
