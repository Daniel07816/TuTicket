import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  public imagen:string;
  constructor() {
    this.imagen ="";
  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
  }

}
