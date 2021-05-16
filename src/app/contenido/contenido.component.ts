import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  datos:any = [];

  constructor(public http:HttpClient) {
        
   }

  ngOnInit(): void {
    this.http.get("./assets/datos.json").subscribe(data => 
      {
         this.datos = data;
         console.log(this.datos);
      } );
    
  }

}
