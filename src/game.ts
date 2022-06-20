import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";

let game_on = false;

interface legend extends Object {
  [key: string]: any;
  [value: number]: any;
}

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

while (game_on) {
  //Test placeholder values; replace with inputs later
  const player = new Player("Player", true, new Gameboard());
  const computer = new Player("Computer", false, new Gameboard());

  let playerTurn = player;

  player.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
  player.playerboard.placeShip(new Ship(4, "Battleship"), true, 0, 1);
  player.playerboard.placeShip(new Ship(3, "Destroyer"), true, 0, 2);

  computer.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
  computer.playerboard.placeShip(new Ship(4, "Battleship"), true, 0, 1);
  computer.playerboard.placeShip(new Ship(3, "Destroyer"), true, 0, 2);
}
