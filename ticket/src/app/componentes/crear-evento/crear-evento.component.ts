import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  evento = {
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
  constructor() {
    this.imagen ="";
  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
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
  }

}
