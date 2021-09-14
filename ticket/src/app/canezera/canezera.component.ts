import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canezera',
  templateUrl: './canezera.component.html',
  styleUrls: ['./canezera.component.css']
})
export class CanezeraComponent implements OnInit {
  public imagen:string;
  constructor() { this.imagen ="" }

  ngOnInit(): void {
    this.imagen = "assets/logo.png"
  }

}
