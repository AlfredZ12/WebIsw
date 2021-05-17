import { Component, OnInit } from '@angular/core';
 import {Animation} from '../animacion';
@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css'],
 
  animations: Animation

})
export class XpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
