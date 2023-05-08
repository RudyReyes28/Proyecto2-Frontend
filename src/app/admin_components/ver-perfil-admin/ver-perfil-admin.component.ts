import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceVerPerfil } from 'src/app/data_services/data-service-verPerfil';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-ver-perfil-admin',
  templateUrl: './ver-perfil-admin.component.html',
  styleUrls: ['./ver-perfil-admin.component.css']
})
export class VerPerfilAdminComponent implements OnInit {

  idUsuario:number;
  usuario: Usuario;
  
  constructor(private servicePerfil: DataServiceVerPerfil, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.params['id'];

    this.servicePerfil.obtenerPerfilAdmin(this.idUsuario)
    .subscribe(
      (usuario: Usuario)=>{
        this.usuario = usuario;
      }
    );

  }

  regresar(){
    this.router.navigate(['admin', this.idUsuario]);
  }

}
