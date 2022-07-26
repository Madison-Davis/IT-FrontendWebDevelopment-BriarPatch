import { Component, OnInit } from '@angular/core';
import { Gamelogic } from "../gamelogic";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { 

  }

  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const information = document.querySelector(".current-status");
    information!.innerHTML = "Find the Rabbit!";
  }

  async clickSubfield( subfield: any ): Promise<void> {
    if ( this.game.gameStatus === 1) {
      console.log(this.game.rabbitPosition)
      console.log(subfield.currentTarget.getAttribute("position"))
      var aElement = subfield.currentTarget; 
      aElement.setAttribute("src", "assets/browndirt.png");
      if ( this.game.rabbitPosition == subfield.currentTarget.getAttribute("position")) {
        var aElement = subfield.currentTarget; 
        aElement.setAttribute("src", "assets/Rabbit.png");
        const information = document.querySelector(".current-status");
        information!.innerHTML = "Horray!";
      } 
    }
  }
}
