import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceActualizarEspecialidad } from 'src/app/data_services/data-service-actualizarEspecialidad';
import { DataServiceInformacionInicialMedico } from 'src/app/data_services/data-service-informacionInicialMedico';
import { Especialidad } from 'src/app/modelos/especialidad.model';
import { EspecialidadDelMedico } from 'src/app/modelos/especialidadMedico.model';

@Component({
  selector: 'app-actualizar-especialidad',
  templateUrl: './actualizar-especialidad.component.html',
  styleUrls: ['./actualizar-especialidad.component.css'],
})
export class ActualizarEspecialidadComponent implements OnInit {
  idMedico: number;
  escogerEspecialidades: Especialidad[];
  especialidadesdMedico: EspecialidadDelMedico[] = [];

  //PARA LA NUEVA ESPECIALIDAD
  idEspecialidadInput: number;
  precioInput: number;

  //PARA LA MODIFICACION DE ESPECIALIDAD
  modificarVerdadero = 0;
  idModificarEspecialidad = 0;
  modificarPrecio = 0;

  constructor(
    private especialidadesListado: DataServiceInformacionInicialMedico,
    private servicioActualizar: DataServiceActualizarEspecialidad,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idMedico = this.route.snapshot.params['id'];

    this.especialidadesListado.obtenerEspecialidades()
      .subscribe((especialidades: Especialidad[]) => {
        this.escogerEspecialidades = especialidades;
      });

    this.servicioActualizar
      .obtenerEspecialidadesMedico(this.idMedico)
      .subscribe((especialidades: EspecialidadDelMedico[]) => {
        this.especialidadesdMedico = especialidades;
      });
  }

  registrarEspecialidad() {
    
    let especialidadEncontrada = 0;
    for (let i = 0; i < this.especialidadesdMedico.length; i++) {
      if (this.especialidadesdMedico[i].id == this.idEspecialidadInput) {
        
        especialidadEncontrada = this.especialidadesdMedico[i].id;
        break;
      }
    }

    console.log(especialidadEncontrada);

    if (especialidadEncontrada > 0) {
      alert('Esta especialidad ya esta agregada');
    } else {
      const es = new EspecialidadDelMedico(this.idEspecialidadInput, this.precioInput,this.idMedico);
      this.servicioActualizar.nuevaEspecialidad(es)
        .subscribe((especialida: EspecialidadDelMedico) => {
          console.log('Especialidad agregada');

          this.servicioActualizar.obtenerEspecialidadesMedico(this.idMedico)
            .subscribe((especialidades: EspecialidadDelMedico[]) => {
              this.especialidadesdMedico = especialidades;
            });
        });
    }
  }

  modificarEspecialidad(idEspecialidad: number) {
    this.modificarVerdadero = 1;
    this.idModificarEspecialidad = idEspecialidad;
  }

  enviarModificacion() {
    const es = new EspecialidadDelMedico(
      this.idModificarEspecialidad,
      this.modificarPrecio,
      this.idMedico
    );
    this.servicioActualizar
      .modificarEspecialidad(es)
      .subscribe((especialida: EspecialidadDelMedico) => {
        console.log('Especialidad modificada');
        this.modificarVerdadero = 0;

        this.servicioActualizar
          .obtenerEspecialidadesMedico(this.idMedico)
          .subscribe((especialidades: EspecialidadDelMedico[]) => {
            this.especialidadesdMedico = especialidades;
          });
      });
  }

  realizarCambios() {
    this.router.navigate(['medico', this.idMedico]);
  }
}
