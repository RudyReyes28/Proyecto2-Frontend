import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServiceLogin } from './data_services/data-service-login';
import { UsuarioService } from './model_services/usuario-service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LaboratorioComponent } from './laboratorio_components/laboratorio/laboratorio.component';
import { MedicoComponent } from './medico_components/medico/medico.component';
import { PacienteComponent } from './paciente_components/paciente/paciente.component';
import { AdministradorComponent } from './admin_components/administrador/administrador.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { DataServiceRegistrarse } from './data_services/data-service-registrarse';
import { DataServicePrimerInicioSesion } from './data_services/data-service-inicioSesion';
import { InformacionInicialComponent } from './medico_components/informacion-inicial/informacion-inicial.component';
import { DataServiceInformacionInicialMedico } from './data_services/data-service-informacionInicialMedico';
import { InformacionInicialLabComponent } from './laboratorio_components/informacion-inicial-lab/informacion-inicial-lab.component';
import { DataServiceInformacionInicialLab } from './data_services/data-service-infoInicialLab';
import { SolicitarEspecialidadComponent } from './medico_components/solicitar-especialidad/solicitar-especialidad.component';
import { DataServiceSolicitarNuevaEspecialidad } from './data_services/data-service-nuevaEspecialidad';
import { SolicitarExamenComponent } from './laboratorio_components/solicitar-examen/solicitar-examen.component';
import { DataServiceSolicitarNuevoExamen } from './data_services/data-service-nuevoExamen';
import { RevisionEspecialidadComponent } from './admin_components/revision-especialidad/revision-especialidad.component';
import { RevisionExamenComponent } from './admin_components/revision-examen/revision-examen.component';
import { DataServiceResivionAdmin } from './data_services/data-service-revisionAdmin';
import { PorcentajeCobroComponent } from './admin_components/porcentaje-cobro/porcentaje-cobro.component';
import { DataServicePorcentajeCobro } from './data_services/data-service-porcentajeCobro';
import { RealizarRecargaComponent } from './paciente_components/realizar-recarga/realizar-recarga.component';
import { DataServiceRealizarRecarga } from './data_services/data-service-realizarRecarga';
import { ActualizarEspecialidadComponent } from './medico_components/actualizar-especialidad/actualizar-especialidad.component';
import { DataServiceActualizarEspecialidad } from './data_services/data-service-actualizarEspecialidad';
import { ActualizarTipoExamenComponent } from './laboratorio_components/actualizar-tipo-examen/actualizar-tipo-examen.component';
import { DataServiceActualizarTipoExamen } from './data_services/data-service-actualizarExamen';
import { ActualizarHorarioComponent } from './medico_components/actualizar-horario/actualizar-horario.component';
import { AgendarConsultaComponent } from './paciente_components/agendar-consulta/agendar-consulta.component';
import { DataServiceAgendarConsulta } from './data_services/data-service-agendarConsulta';
import { DataServiceSolicitarExamen } from './data_services/data-service-solicitarExamen';
import { SolicitarExamenesPacienteComponent } from './paciente_components/solicitar-examenes-paciente/solicitar-examenes-paciente.component';
import { DataServiceVerConsultasMedico } from './data_services/data-service-verConsultasMedico';
import { VerConsultasComponent } from './medico_components/ver-consultas/ver-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LaboratorioComponent,
    MedicoComponent,
    PacienteComponent,
    AdministradorComponent,
    RegistrarseComponent,
    InformacionInicialComponent,
    InformacionInicialLabComponent,
    SolicitarEspecialidadComponent,
    SolicitarExamenComponent,
    RevisionEspecialidadComponent,
    RevisionExamenComponent,
    PorcentajeCobroComponent,
    RealizarRecargaComponent,
    ActualizarEspecialidadComponent,
    ActualizarTipoExamenComponent,
    ActualizarHorarioComponent,
    AgendarConsultaComponent,
    SolicitarExamenesPacienteComponent,
    VerConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService, DataServiceLogin, DataServiceRegistrarse, DataServicePrimerInicioSesion,
    DataServiceInformacionInicialMedico, DataServiceInformacionInicialLab, DataServiceSolicitarNuevaEspecialidad,
  DataServiceSolicitarNuevoExamen, DataServiceResivionAdmin, DataServicePorcentajeCobro, DataServiceRealizarRecarga,
  DataServiceActualizarEspecialidad, DataServiceActualizarTipoExamen, DataServiceAgendarConsulta,
  DataServiceSolicitarExamen, DataServiceVerConsultasMedico],
  bootstrap: [AppComponent]
})
export class AppModule { }
