import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceInformacionInicialMedico } from 'src/app/data_services/data-service-informacionInicialMedico';
import { Especialidad } from 'src/app/modelos/especialidad.model';
import { EspecialidadDelMedico } from 'src/app/modelos/especialidadMedico.model';
import { HorarioMedico } from 'src/app/modelos/horarioMedico.model';
import { InfoInicialMedico } from 'src/app/modelos/infoinicialmedico.modelo';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-informacion-inicial',
  templateUrl: './informacion-inicial.component.html',
  styleUrls: ['./informacion-inicial.component.css']
})
export class InformacionInicialComponent implements OnInit {

  usuario: Usuario;

  //PARA LA ESPECIALIDAD
  idEspecialidadInput: number;
  precioInput: number;

  //PARA EL HORARIO
  horaInicialInput: string;
  horaFinalInput: string;

  //ARREGLOS
  especialidadMedico: EspecialidadDelMedico []=[];
  horarioMedico: HorarioMedico []=[];


  especialidades: Especialidad [];

  constructor( private informacionInicial: DataServiceInformacionInicialMedico,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.usuario = new Usuario(id,null,null,null,null,null,null,null,null,null,null);

    this.informacionInicial.obtenerEspecialidades()
    .subscribe(
      (especialidades: Especialidad [])=>{
        this.especialidades = especialidades;
      }
    );

  }

  registrarEspecialidad(){
    console.log("idEspecialidad " + this.idEspecialidadInput);
    console.log("precio "+this.precioInput);
    //const especialidadEncontrada = this.especialidades.find((especialidad) => especialidad.idEspecialidad === this.idEspecialidadInput);
    //const nombre = especialidadEncontrada.nombre;
      const  es = new EspecialidadDelMedico(this.idEspecialidadInput, this.precioInput, null);

      this.especialidadMedico.push(es);
      
  }

  registrarHorario(){
    console.log('Horario inicial: '+this.horaInicialInput);
    const horario = new HorarioMedico(this.horaInicialInput, this.horaFinalInput, null, null);
    
    this.horarioMedico.push(horario);
  }

  enviarInformacion(){
    const informacion = new InfoInicialMedico(this.usuario.idUsuario,this.especialidadMedico,this.horarioMedico);

    this.informacionInicial.enviarInformacion(informacion)
    .subscribe(
      (objeto: Object) => {
          const info = objeto as InfoInicialMedico;
          console.log('se agrega al arreglo la persona '+ info.idMedico);
      }
    );

    this.router.navigate(['medico', this.usuario.idUsuario]);
  }

}
