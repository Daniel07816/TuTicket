import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  evento = {
    idUsuario:'',
    nombre:'',
    descripcion: '',
    categoria: '',
    fecha: '',
    precio: '',
    ubicacion: '',
    boletosmax: '',
    fechamax: ''
  }

  public imagen:string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.imagen ="";

  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.evento.idUsuario = <string>window.localStorage.getItem('token');
  }

  crearEvento(){
    //console.log(this.evento['nombre']);
    //console.log(this.evento['descripcion']);
    //console.log(this.evento['categoria']);
    //console.log(this.evento['fecha']);
    //console.log(this.evento['precio']);
    //console.log(this.evento['ubicacion']);
    //console.log(this.evento['boletosmax']);
    //console.log(this.evento['fechamax']);
    this.authService.nuevoEventos(this.evento)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/eventos'])
        },
        err => {
          console.log(err);
        }
      )
  }

}
