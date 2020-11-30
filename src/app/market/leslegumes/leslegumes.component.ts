import { Component, OnInit } from '@angular/core';
import { Legume } from 'src/app/model/legume';

@Component({
  selector: 'yes-leslegumes',
  templateUrl: './leslegumes.component.html',
  styleUrls: ['./leslegumes.component.css']
})
export class LeslegumesComponent implements OnInit {
  lesLegumes : Legume[]= [ 
    {photo: 'assets/Legumes/salade.jpg', libelle:'Salade', prix:1.5, frais:false},
    {photo:'assets/Legumes/tomate.jpg',libelle: 'Tomates', prix:2.8,frais: true},
    {photo:'assets/Legumes/poivron.jpg', libelle:'Poivrons', prix:3.5, frais:true} 
  ];
  date!: Date; 
  constructor() { }
nombrefrais()
{
let i  : number ; 
let x : number = 0  ; 
  for(i=0;i<this.lesLegumes.length;i++)
  {
    if(this.lesLegumes[i].frais == true)
    {
      x++ ; 
    }    
  }
  return x ; 
}
  ngOnInit(): void {
  }

}
