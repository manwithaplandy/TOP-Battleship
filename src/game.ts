import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";
import { drawBoard, setUpListener } from "./dom.js";
let game_on = true;

// // For testing
// document.addEventListener("click", () => {
//   game_on = true;
//   console.log(`Game on: ${game_on}`);
// });

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
  drawBoard(player.playerboard, player.name);
  drawBoard(computer.playerboard, computer.name);

  let playerTurn = player;

  setUpListener(computer);

  console.log(player.playerboard);

  player.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
  player.playerboard.placeShip(new Ship(4, "Battleship"), true, 1, 0);
  player.playerboard.placeShip(new Ship(3, "Destroyer"), true, 2, 0);

  computer.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
  computer.playerboard.placeShip(new Ship(4, "Battleship"), true, 1, 0);
  computer.playerboard.placeShip(new Ship(3, "Destroyer"), true, 2, 0);

  break;
}
