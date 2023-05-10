import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceCargarDatos } from '../data_services/data-service-cargarDatos';

@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html',
  styleUrls: ['./cargar-datos.component.css']
})
export class CargarDatosComponent implements OnInit {

  constructor(private cargarDatos: DataServiceCargarDatos,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  seleccionarArchivo(evento: any){
    
    const file = evento.target.files[0];

    // crear un objeto FormData
    const formData = new FormData();

    // agregar el archivo al objeto FormData
    formData.append('archivoEntrada', file);

    this.cargarDatos.agregarExamenes(formData)
    .subscribe(
      (solicitud: string )=>{
        console.log('archivos guardados')
    }
    );

    alert('Datos cargados');
  }

  regresar(){
    this.router.navigate(['login']);
  }
}
