import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceResivionAdmin } from 'src/app/data_services/data-service-revisionAdmin';
import { Especialidad } from 'src/app/modelos/especialidad.model';

@Component({
  selector: 'app-revision-especialidad',
  templateUrl: './revision-especialidad.component.html',
  styleUrls: ['./revision-especialidad.component.css']
})
export class RevisionEspecialidadComponent implements OnInit {

  idAdmin: number;
  idEspecialidad: number;
  especialidades: Especialidad[];
  constructor(private revisionAdmin: DataServiceResivionAdmin,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.idAdmin = this.route.snapshot.params['id'];

    this.revisionAdmin.recibirEspecialidad()
    .subscribe(
      (especialidades: Especialidad [])=>{
        this.especialidades = especialidades;
      }
    );
  }

  aceptarEspecialidad(idEspecialidad: number){
    var especialidad = new Especialidad(idEspecialidad,null,null,'ACEPTADA',null);
    
    this.revisionAdmin.enviarInformacionEspecialidad(especialidad)
    .subscribe(
      (especialidadD: Especialidad)=>{
        const index = this.especialidades.findIndex(especialidad => especialidad.idEspecialidad ==idEspecialidad);
        this.especialidades.splice(index, 1);
      }
    );

  }

  rechazarEspecialidad(idEspecialidad: number){
    var especialidad = new Especialidad(idEspecialidad,null,null,'RECHAZADA',null);
    
    this.revisionAdmin.enviarInformacionEspecialidad(especialidad)
    .subscribe(
      (especialidadD: Especialidad)=>{
        const index = this.especialidades.findIndex(especialidad => especialidad.idEspecialidad ==idEspecialidad);
        this.especialidades.splice(index, 1);
      }
    );
  }

  regresarAdmin(){
    this.router.navigate(['admin', this.idAdmin]);
  }
}
