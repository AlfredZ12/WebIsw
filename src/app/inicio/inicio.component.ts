import { Component, OnInit } from '@angular/core';
import {Animation} from '../animacion';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: Animation
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
