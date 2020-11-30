import { Component, OnInit,Input } from '@angular/core';
import { Legume } from 'src/app/model/legume';
@Component({
  selector: 'yes-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
@Input() leg :Legume = new Legume() ; 
  constructor() { }

  ngOnInit(): void {
  }

}
