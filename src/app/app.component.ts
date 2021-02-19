import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title ='search filter table '

 searchedKeyword!: string;
 
filterResultDataSet=[
{
  fristName:'Bobe',
  lastName:'Ronaldo',
  Marks: '45',
  Grade:'C'
},
 {
  firstName: 'Leo',
  lastName: 'Messi',
  Marks: '52',
  Grade:'B'
 },
 {
  firstName: 'Neymar',
  lastName: 'Junior',
  Marks: '80',
  Grade:'A'
},
{
  firstName: 'Sergio',
  lastName: 'Ramos',
  Marks: '65',
  Grade:'B'
},
{
  firstName: 'Karim',
  lastName: 'Benzema',
  Marks: '90',
  Grade:'A'
},
{
  firstName: 'Sergio',
  lastName: 'Buiscut',
  Marks: '55',
  Grade:'B'
},
{
  firstName: 'Gerard',
  lastName: 'Pique',
  Marks: '86',
  Grade:'A'
 },
 {
   fristName: 'Yash',
   lastName:'Patel',
   Marks: '25',
   Grade:'C'
 },
{
  fristName: 'Himani',
  lastName:'Desai',
  Marks: '75',
  Grade:'B'
}
]
}
