import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceActualizarTipoExamen } from 'src/app/data_services/data-service-actualizarExamen';
import { DataServiceInformacionInicialLab } from 'src/app/data_services/data-service-infoInicialLab';
import { TipoExamen } from 'src/app/modelos/tipoExamen.model';
import { TipoExamenLab } from 'src/app/modelos/tipoExamenLab.model';

@Component({
  selector: 'app-actualizar-tipo-examen',
  templateUrl: './actualizar-tipo-examen.component.html',
  styleUrls: ['./actualizar-tipo-examen.component.css']
})
export class ActualizarTipoExamenComponent implements OnInit {

  idLaboratorio: number;
  escogerExamenes: TipoExamen[];
  examenesDelLab: TipoExamenLab [] = [];

   //PARA EL NUEVO EXAMEN
   idExamenInput: number;
   precioInput: number;

   //PARA LA MODIFICACION DE Examen
  modificarVerdadero = 0;
  idModificarExamen = 0;
  modificarPrecio = 0;

  constructor(private examenesListado: DataServiceInformacionInicialLab,
    private servicioActualizar: DataServiceActualizarTipoExamen,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idLaboratorio = this.route.snapshot.params['id'];

    this.examenesListado.obtenerExamenes()
    .subscribe(
      (examenes: TipoExamen [])=>{
        this.escogerExamenes = examenes;
      }
    );

    this.servicioActualizar.obtenerExamenesLab(this.idLaboratorio)
    .subscribe(
      (examenes: TipoExamenLab [])=>{
        this.examenesDelLab = examenes;
      }
    );
  }

  registrarExamen(){
    let examenEncontrado = 0;
    for (let i = 0; i < this.examenesDelLab.length; i++) {
      if (this.examenesDelLab[i].idTipo == this.idExamenInput) {
        
        examenEncontrado = this.examenesDelLab[i].idTipo;
        break;
      }
    }

    console.log(examenEncontrado);

    if (examenEncontrado > 0) {
      alert('Este examen ya esta agregado');
    } else {
      const es = new TipoExamenLab(this.idExamenInput, this.precioInput, this.idLaboratorio);
      this.servicioActualizar.nuevoTipoExamen(es)
        .subscribe((examen: TipoExamenLab) => {
          console.log('Examen agregado');

          this.servicioActualizar.obtenerExamenesLab(this.idLaboratorio)
          .subscribe(
            (examenes: TipoExamenLab [])=>{
            this.examenesDelLab = examenes;
            }
          );
        });
    }
  }

  modificarExamen(idExamen: number) {
    this.modificarVerdadero = 1;
    this.idModificarExamen = idExamen;
  }

  enviarModificacion() {
    const es = new TipoExamenLab(
      this.idModificarExamen,
      this.modificarPrecio,
      this.idLaboratorio
    );
    this.servicioActualizar
      .modificarTipoExamen(es)
      .subscribe((examen: TipoExamenLab) => {
        console.log('examen modificado');
        this.modificarVerdadero = 0;

        this.servicioActualizar.obtenerExamenesLab(this.idLaboratorio)
          .subscribe(
            (examenes: TipoExamenLab [])=>{
            this.examenesDelLab = examenes;
            }
          );
      });
  }

  realizarCambios() {
    this.router.navigate(['laboratorio', this.idLaboratorio]);
  }

}
