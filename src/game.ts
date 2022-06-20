import { Gameboard } from "./gameboard";
import { Player } from "./player";

let game_on = true;

interface legend {
  [key: string]: any;
  [value: number]: any;
}

while (game_on) {
  //Test placeholder values; replace with inputs later
  const player = new Player("Player", true, new Gameboard());
  const computer = new Player("Computer", false, new Gameboard());

  // Ships legend:
  // Size / Name
  // 5 / Carrier
  // 4 / Battleship
  // 3 / Destroyer
  // 3 / Submarine
  // 2 / Patrol Boat

  const shipLegend: legend = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
  };
  // Populate both game boards randomly, for testing
  function placeRandomShips() {
    for (let ship of shipLegend.keys()) {
      player.placeRandomShip(player.playerboard, shipLegend[ship], ship);
    }
    for (let ship of shipLegend.keys()) {
      computer.placeRandomShip(computer.playerboard, shipLegend[ship], ship);
    }
    console.log(player.playerboard);
  }
  placeRandomShips();
  break;
}
