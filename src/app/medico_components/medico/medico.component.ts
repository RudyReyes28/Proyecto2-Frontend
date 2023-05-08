import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicePrimerInicioSesion } from 'src/app/data_services/data-service-inicioSesion';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  usuario: Usuario;

  constructor(private primerInicioSesion: DataServicePrimerInicioSesion, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.usuario = new Usuario(id,null,null,null,null,null,null,null,null,null,null);

    let primerInicioSesion: boolean;
    this.primerInicioSesion.verificarPrimerInicioMedico(this.usuario)
    .subscribe((primerInicio: any) => {
      primerInicioSesion = primerInicio;
      console.log('primer incio: '+primerInicioSesion);
      if(primerInicio){
        this.router.navigate(['medico/InformacionInicial', this.usuario.idUsuario]);
      }
      
    }, (error) => {
      // manejar el error aquí
    });
  }

  nuevaEspecialidad(){
    this.router.navigate(['medico/SolicitarEspecialidad', this.usuario.idUsuario]);
  }

  actualizarEspecialidad(){
    this.router.navigate(['medico/ActualizarEspecialidad', this.usuario.idUsuario]);
  }

  actualizarHorario(){
    this.router.navigate(['medico/ActualizarHorario', this.usuario.idUsuario]);
  }

  verConsultas(){
    this.router.navigate(['medico/VerConsultas', this.usuario.idUsuario]);
  }

  revisarExamenes(){
    this.router.navigate(['medico/RevisarExamenes', this.usuario.idUsuario]);
  }

  verHistorial(){
    this.router.navigate(['medico/VerHistorial', this.usuario.idUsuario]);
  }

  cerrarSesion(){
    this.router.navigate(['login']);
  }

  verPerfil(){
    this.router.navigate(['medico/verPerfil', this.usuario.idUsuario]);
  }

}
