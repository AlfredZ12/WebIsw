import { Component, OnInit } from '@angular/core';
import {Animation} from '../animacion';
@Component({
  selector: 'app-cascada',
  templateUrl: './cascada.component.html',
  styleUrls: ['./cascada.component.css'],
  animations:Animation
})
export class CascadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
