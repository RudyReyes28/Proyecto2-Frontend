import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceRealizarRecarga } from 'src/app/data_services/data-service-realizarRecarga';
import { RecargaPaciente } from 'src/app/modelos/recargaPaciente.model';

@Component({
  selector: 'app-realizar-recarga',
  templateUrl: './realizar-recarga.component.html',
  styleUrls: ['./realizar-recarga.component.css']
})
export class RealizarRecargaComponent implements OnInit {

  idPaciente: number;
  nuevaRecargaInput: number;
  constructor(private solicitarRecarga: DataServiceRealizarRecarga,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
     this.idPaciente = this.route.snapshot.params['id'];
  }

  realizarRecarga(){
    const nuevaRecarga = new RecargaPaciente(null, this.idPaciente, null, this.nuevaRecargaInput);
    this.solicitarRecarga.solicitarRecarga(nuevaRecarga)
    .subscribe(
      (objeto: Object) => {
        const info = objeto as RecargaPaciente;
        console.log('se agrega la nueva recarga '+ info.monto);
        this.router.navigate(['paciente', this.idPaciente]);
      }
    );
  }

}
