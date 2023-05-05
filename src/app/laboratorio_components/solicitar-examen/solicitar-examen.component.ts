import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceSolicitarNuevoExamen } from 'src/app/data_services/data-service-nuevoExamen';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';

@Component({
  selector: 'app-solicitar-examen',
  templateUrl: './solicitar-examen.component.html',
  styleUrls: ['./solicitar-examen.component.css']
})
export class SolicitarExamenComponent implements OnInit {

  idLaboratorio: number;
  nombreInput: string;
  descripcionInput: string;

  constructor(private nuevoExamen: DataServiceSolicitarNuevoExamen, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.idLaboratorio = this.route.snapshot.params['id'];
  }

  solicitarExamen(){
    const examen = new TipoExamen(null,this.nombreInput,this.descripcionInput,null,this.idLaboratorio);
    this.nuevoExamen.enviarInformacion(examen)
    .subscribe(
      (objeto: Object) => {
        const info = objeto as TipoExamen;
        console.log('se agrega el examen '+ info.nombre);
        this.router.navigate(['laboratorio', this.idLaboratorio]);
      }
    );
  }

}
