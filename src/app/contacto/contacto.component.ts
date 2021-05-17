import { Component, OnInit } from '@angular/core';
import {Animation} from '../animacion';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: Animation
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
