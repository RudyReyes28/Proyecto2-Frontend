import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './admin_components/administrador/administrador.component';
import { PorcentajeCobroComponent } from './admin_components/porcentaje-cobro/porcentaje-cobro.component';
import { ReportesAdminComponent } from './admin_components/reportes-admin/reportes-admin.component';
import { RevisionEspecialidadComponent } from './admin_components/revision-especialidad/revision-especialidad.component';
import { RevisionExamenComponent } from './admin_components/revision-examen/revision-examen.component';
import { VerPerfilAdminComponent } from './admin_components/ver-perfil-admin/ver-perfil-admin.component';
import { CargarDatosComponent } from './cargar-datos/cargar-datos.component';
import { ActualizarTipoExamenComponent } from './laboratorio_components/actualizar-tipo-examen/actualizar-tipo-examen.component';
import { InformacionInicialLabComponent } from './laboratorio_components/informacion-inicial-lab/informacion-inicial-lab.component';
import { LaboratorioComponent } from './laboratorio_components/laboratorio/laboratorio.component';
import { ReportesLaboratorioComponent } from './laboratorio_components/reportes-laboratorio/reportes-laboratorio.component';
import { SolicitarExamenComponent } from './laboratorio_components/solicitar-examen/solicitar-examen.component';
import { VerPerfilLabComponent } from './laboratorio_components/ver-perfil-lab/ver-perfil-lab.component';
import { VerSolicitudExamenComponent } from './laboratorio_components/ver-solicitud-examen/ver-solicitud-examen.component';
import { LoginComponent } from './login/login.component';
import { ActualizarEspecialidadComponent } from './medico_components/actualizar-especialidad/actualizar-especialidad.component';
import { ActualizarHorarioComponent } from './medico_components/actualizar-horario/actualizar-horario.component';
import { InformacionInicialComponent } from './medico_components/informacion-inicial/informacion-inicial.component';
import { MedicoComponent } from './medico_components/medico/medico.component';
import { ReportesMedicoComponent } from './medico_components/reportes-medico/reportes-medico.component';
import { RevisarExamenConsultaComponent } from './medico_components/revisar-examen-consulta/revisar-examen-consulta.component';
import { SolicitarEspecialidadComponent } from './medico_components/solicitar-especialidad/solicitar-especialidad.component';
import { VerConsultasComponent } from './medico_components/ver-consultas/ver-consultas.component';
import { VerHistorialMedicoComponent } from './medico_components/ver-historial-medico/ver-historial-medico.component';
import { VerPerfilMedicoComponent } from './medico_components/ver-perfil-medico/ver-perfil-medico.component';
import { AgendarConsultaComponent } from './paciente_components/agendar-consulta/agendar-consulta.component';
import { PacienteComponent } from './paciente_components/paciente/paciente.component';
import { RealizarRecargaComponent } from './paciente_components/realizar-recarga/realizar-recarga.component';
import { SolicitarExamenesPacienteComponent } from './paciente_components/solicitar-examenes-paciente/solicitar-examenes-paciente.component';
import { SubirResultadosExamenComponent } from './paciente_components/subir-resultados-examen/subir-resultados-examen.component';
import { VerPerfilPacienteComponent } from './paciente_components/ver-perfil-paciente/ver-perfil-paciente.component';
import { VerResultadoExamenComponent } from './paciente_components/ver-resultado-examen/ver-resultado-examen.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'admin/:id', component: AdministradorComponent},
  {path: 'paciente/:id', component: PacienteComponent},
  {path: 'laboratorio/:id', component: LaboratorioComponent},
  {path: 'medico/:id', component: MedicoComponent},
  {path: 'medico/InformacionInicial/:id', component: InformacionInicialComponent},
  {path: 'laboratorio/InformacionInicial/:id', component: InformacionInicialLabComponent},
  {path: 'medico/SolicitarEspecialidad/:id', component:SolicitarEspecialidadComponent},
  {path: 'laboratorio/SolicitarExamen/:id', component:SolicitarExamenComponent},
  {path: 'administrador/RevisionEspecialidad/:id', component:RevisionEspecialidadComponent},
  {path: 'administrador/RevisionExamen/:id', component:RevisionExamenComponent},
  {path: 'administrador/PorcentajeCobro/:id', component:PorcentajeCobroComponent},
  {path: 'paciente/Recarga/:id', component:RealizarRecargaComponent},
  {path: 'medico/ActualizarEspecialidad/:id', component:ActualizarEspecialidadComponent},
  {path: 'laboratorio/ActualizarExamen/:id', component:ActualizarTipoExamenComponent},
  {path: 'medico/ActualizarHorario/:id', component:ActualizarHorarioComponent},
  {path: 'paciente/AgendarConsulta/:id', component:AgendarConsultaComponent},
  {path: 'paciente/SolicitarExamen/:id', component:SolicitarExamenesPacienteComponent},
  {path: 'medico/VerConsultas/:id', component:VerConsultasComponent},
  {path: 'laboratorio/SolicitudExamenes/:id', component:VerSolicitudExamenComponent},
  {path: 'paciente/VerResultados/:id', component:VerResultadoExamenComponent},
  {path: 'paciente/SubirResultados/:id', component:SubirResultadosExamenComponent},
  {path: 'medico/RevisarExamenes/:id', component:RevisarExamenConsultaComponent},
  {path: 'medico/VerHistorial/:id', component:VerHistorialMedicoComponent},
  {path: 'medico/verPerfil/:id', component:VerPerfilMedicoComponent},
  {path: 'administrador/verPerfil/:id', component:VerPerfilAdminComponent},
  {path: 'laboratorio/verPerfil/:id', component:VerPerfilLabComponent},
  {path: 'paciente/verPerfil/:id', component:VerPerfilPacienteComponent},
  {path: 'cargarDatos', component: CargarDatosComponent},
  {path: 'administrador/reportes/:id', component: ReportesAdminComponent},
  {path: 'medico/reportes/:id', component: ReportesMedicoComponent},
  {path: 'laboratorio/reportes/:id', component: ReportesLaboratorioComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
