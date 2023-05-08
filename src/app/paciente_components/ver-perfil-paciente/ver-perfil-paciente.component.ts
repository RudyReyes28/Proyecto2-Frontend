import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceVerPerfil } from 'src/app/data_services/data-service-verPerfil';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-ver-perfil-paciente',
  templateUrl: './ver-perfil-paciente.component.html',
  styleUrls: ['./ver-perfil-paciente.component.css']
})
export class VerPerfilPacienteComponent implements OnInit {

  idUsuario:number;
  usuario: Usuario;
  
  constructor(private servicePerfil: DataServiceVerPerfil, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.params['id'];

    this.servicePerfil.obtenerPerfilPaciente(this.idUsuario)
    .subscribe(
      (usuario: Usuario)=>{
        this.usuario = usuario;
      }
    );

  }

  regresar(){
    this.router.navigate(['paciente', this.idUsuario]);
  }

}
