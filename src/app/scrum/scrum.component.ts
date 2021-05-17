import { Component, OnInit } from '@angular/core';


import {Animation} from '../animacion';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css'],
  animations: Animation

  

})
export class ScrumComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
      
  }

  

}
