import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceInformacionInicialLab } from 'src/app/data_services/data-service-infoInicialLab';
import { InfoInicialLab } from 'src/app/modelos/infoiniciallab.model';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';
import { TipoExamenLab } from 'src/app/modelos/tipoExamenLab.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-informacion-inicial-lab',
  templateUrl: './informacion-inicial-lab.component.html',
  styleUrls: ['./informacion-inicial-lab.component.css']
})
export class InformacionInicialLabComponent implements OnInit {

  usuario: Usuario;

  //PARA EL EXAMEN
  idExamenInput: number;
  precioInput: number;

  //ARREGLO DE EXAMENES DISPONIBLES
  examenes: TipoExamen [];

  //ARREGLO DEL EXAMEN DEL LAB
  examenesLab: TipoExamenLab [] = [];

  constructor(private informacionInicial: DataServiceInformacionInicialLab,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.usuario = new Usuario(id,null,null,null,null,null,null,null,null,null,null);

    this.informacionInicial.obtenerExamenes()
    .subscribe(
      (examenes: TipoExamen [])=>{
        this.examenes = examenes;
      }
    )
  }

  registrarExamen(){
    console.log("idExamen" + this.idExamenInput);
    console.log("precio "+this.precioInput);
    //const especialidadEncontrada = this.especialidades.find((especialidad) => especialidad.idEspecialidad === this.idEspecialidadInput);
    //const nombre = especialidadEncontrada.nombre;
      const  es = new TipoExamenLab(this.idExamenInput, this.precioInput, null);

      this.examenesLab.push(es);
  }

  enviarInformacion(){
    const informacion = new InfoInicialLab(this.usuario.idUsuario,this.examenesLab);

    this.informacionInicial.enviarInformacion(informacion)
    .subscribe(
      (objeto: Object) => {
          const info = objeto as InfoInicialLab;
          console.log('se agrega al arreglo la persona '+ info.idLaboratorio);
      }
    );

    this.router.navigate(['laboratorio', this.usuario.idUsuario]);
  }

}
