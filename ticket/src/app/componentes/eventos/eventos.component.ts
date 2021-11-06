import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  public imagen:string;
  url_api = 'http://localhost:3000/eventos'
  constructor(private http: HttpClient) {
    this.imagen ="";
  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.http.get(this.url_api).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    
  }

}
