import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceResivionAdmin } from 'src/app/data_services/data-service-revisionAdmin';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';

@Component({
  selector: 'app-revision-examen',
  templateUrl: './revision-examen.component.html',
  styleUrls: ['./revision-examen.component.css']
})
export class RevisionExamenComponent implements OnInit {

  idAdmin: number;
  idExamen: number;
  examenes: TipoExamen[];
  constructor(private revisionAdmin: DataServiceResivionAdmin,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.idAdmin = this.route.snapshot.params['id'];

    this.revisionAdmin.recibirExamen()
    .subscribe(
      (examenes: TipoExamen [])=>{
        this.examenes = examenes;
      }
    );
  }

  aceptarExamen(idExamen: number){
    var examen = new TipoExamen(idExamen,null,null,'ACEPTADA',null);
    
    this.revisionAdmin.enviarInformacionExamen(examen)
    .subscribe(
      (examenD: TipoExamen)=>{
        const index = this.examenes.findIndex(examen => examen.idTipo ==idExamen);
        this.examenes.splice(index, 1);
      }
    );

  }

  rechazarExamen(idExamen: number){
    var examen = new TipoExamen(idExamen,null,null,'RECHAZADA',null);
    
    this.revisionAdmin.enviarInformacionExamen(examen)
    .subscribe(
      (examenD: TipoExamen)=>{
        const index = this.examenes.findIndex(examen => examen.idTipo ==idExamen);
        this.examenes.splice(index, 1);
      }
    );

  }

  regresarAdmin(){
    this.router.navigate(['admin', this.idAdmin]);
  }

}
