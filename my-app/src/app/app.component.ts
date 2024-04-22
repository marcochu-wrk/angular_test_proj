import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  imgSrc: string;
  favouriteAnimal: string;
  pokemonName: string;
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
