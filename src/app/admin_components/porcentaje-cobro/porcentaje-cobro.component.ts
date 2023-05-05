import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicePorcentajeCobro } from 'src/app/data_services/data-service-porcentajeCobro';
import { PorcentajeCobro } from 'src/app/modelos/porcentajeCobro.model';

@Component({
  selector: 'app-porcentaje-cobro',
  templateUrl: './porcentaje-cobro.component.html',
  styleUrls: ['./porcentaje-cobro.component.css']
})
export class PorcentajeCobroComponent implements OnInit {

  idAdmin: number;
  porcentajeActual: PorcentajeCobro;
  porcentajeNuevoInput: number; 
  constructor(private servicioPorcentaje: DataServicePorcentajeCobro,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idAdmin = this.route.snapshot.params['id'];

    this.servicioPorcentaje.recibirPorcentajeActual()
    .subscribe(
      (porcentaje: PorcentajeCobro)=>{
        this.porcentajeActual = porcentaje;
      }
    );

  }

  cambiarPorcentaje(){
    const nuevoPorcentaje = new PorcentajeCobro(null, this.porcentajeNuevoInput, null, null,this.idAdmin, null);
    this.servicioPorcentaje.enviarNuevoPorcentaje(nuevoPorcentaje)
    .subscribe(
      (objeto: Object) => {
        const info = objeto as PorcentajeCobro;
        console.log('se agrega el nuevo porcentaje '+ info.porcentaje);
        this.router.navigate(['admin', this.idAdmin]);
      }
    );

  }

}
