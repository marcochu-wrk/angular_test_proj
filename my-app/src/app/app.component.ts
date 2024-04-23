import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  imgSrc: string;
  favouriteAnimal: string;
  pokemonName: string;
  pokemons: Pokemon[] = [{
    id:1,
    name:'pikachu',
    type:'electric',
    isCool: false
  },{
    id:2,
    name:'Charmander',
    type:'Fire',
    isCool: true
  }
];

  constructor(){
    this.title = "Basket of baby beavers";
    this.imgSrc = "https://i.imgur.com/uWtpmEQ.jpg"
    this.favouriteAnimal = "turtle";
    this.pokemonName = "";
  }

  handleClick(value:any){
    console.log(value);
  }
}
