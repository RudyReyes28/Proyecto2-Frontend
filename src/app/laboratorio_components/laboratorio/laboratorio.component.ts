import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicePrimerInicioSesion } from 'src/app/data_services/data-service-inicioSesion';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  usuario: Usuario;
  constructor(private primerInicioSesion: DataServicePrimerInicioSesion, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.usuario = new Usuario(id,null,null,null,null,null,null,null,null,null,null);

    let primerInicioSesion: boolean;
    this.primerInicioSesion.verificarPrimerInicioLab(this.usuario)
    .subscribe((primerInicio: any) => {
      primerInicioSesion = primerInicio;
      console.log('primer incio: '+primerInicioSesion);
      if(primerInicio){
        this.router.navigate(['laboratorio/InformacionInicial', this.usuario.idUsuario]);
      }
      
    }, (error) => {
      // manejar el error aquí
    });
  }

  nuevoExamen(){
    this.router.navigate(['laboratorio/SolicitarExamen', this.usuario.idUsuario]);
  }

  actualizarExamen(){
    this.router.navigate(['laboratorio/ActualizarExamen', this.usuario.idUsuario]);
  }

}
