import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs';
import { DataServiceSolicitarExamen } from 'src/app/data_services/data-service-solicitarExamen';
import { ExamenSolicitado } from 'src/app/modelos/examenSolicitado.model';
import { Laboratorio } from 'src/app/modelos/laboratorio.model';
import { SolicitudExamen } from 'src/app/modelos/solicitudExamen.model';
import { TipoExamenLab } from 'src/app/modelos/tipoExamenLab.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-solicitar-examenes-paciente',
  templateUrl: './solicitar-examenes-paciente.component.html',
  styleUrls: ['./solicitar-examenes-paciente.component.css']
})
export class SolicitarExamenesPacienteComponent implements OnInit {

  //Paciente
  paciente: Usuario;
  idPaciente: number;
  

  //PARA FILTRAR LOS LABS
  activarTabla = 0;
  activarTablaExamen = 0;

  //Para realizar la solicitud
  idLabInput = 0;
  indexInput = 0;
  indexInputExamen = 0;
  idExamenInput = 0;
  precioInput = 0;

  //TOTAL DE EXAMENES
  precioTotal = 0;

  //LABORATORIOS
  laboratorios: Laboratorio[];
  examenesLaboratorio: TipoExamenLab[] = [];

  //EXAMENES A ENVIAR
  examenes: ExamenSolicitado [] = [];
  
  constructor(private servicioPaciente: DataServiceSolicitarExamen,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.servicioPaciente.obtenerPaciente(this.idPaciente)
    .subscribe(
      (paciente: Usuario)=>{
        this.paciente = paciente;
        console.log(paciente.saldo);
      }
    );
  
    this.servicioPaciente.obtenerLaboratorios()
    .subscribe(
      (laboratorios: Laboratorio [])=>{
        this.laboratorios = laboratorios;
      }
    );
  }

  buscarLaboratorio(){
    this.activarTabla = 1;
    
    this.idLabInput = this.laboratorios[this.indexInput].idLaboratorio;
  }

  registrarExamen(){
    this.activarTablaExamen = 1;
    this.idExamenInput = this.laboratorios[this.indexInput].examenes[this.indexInputExamen].idTipo;
    this.precioInput = this.laboratorios[this.indexInput].examenes[this.indexInputExamen].precio;
    console.log('precio '+this.precioInput);
    console.log('Id laboratorio '+this.idLabInput);

    this.precioTotal += this.precioInput;

    if(this.paciente.saldo<this.precioTotal){
        alert('Su saldo es insuficiente para agregar este examen');
        this.precioTotal -= this.precioInput;
    }else{
      let examen = new ExamenSolicitado(null,null, null, this.idExamenInput, this.precioInput, null);
      this.examenes.push(examen);
    }
    

  }

  enviarSolicitud(){
    let solicitudExamen = new SolicitudExamen(null, this.idPaciente, this.idLabInput,null,null,null,null,this.examenes);

    this.servicioPaciente.agendarExamenes(solicitudExamen)
    .subscribe(
      (examenes: SolicitudExamen)=>{
        console.log('Solicitud Enviada');
        this.router.navigate(['paciente', this.idPaciente]);
      }
    );
  }


  regresar(){
    this.router.navigate(['paciente', this.idPaciente]);
  }

}
