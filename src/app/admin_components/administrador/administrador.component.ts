import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  idAdmin: number;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAdmin = this.route.snapshot.params['id'];
  }

  revisarEspecialidad(){
    this.router.navigate(['administrador/RevisionEspecialidad', this.idAdmin]);
  }

  revisarExamen(){
    this.router.navigate(['administrador/RevisionExamen', this.idAdmin]);
  }

  cambiarPorcentaje(){
    this.router.navigate(['administrador/PorcentajeCobro', this.idAdmin]);
  }

  verPerfil(){
    this.router.navigate(['administrador/verPerfil', this.idAdmin]);
  }

  cerrarSesion(){
    this.router.navigate(['login']);
  }

}
