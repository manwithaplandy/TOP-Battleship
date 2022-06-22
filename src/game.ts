import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";
import {
  attackCell,
  drawBoard,
  findCell,
  refreshTurn,
  setUpListener,
  teardownListener,
} from "./dom.js";
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

  // Human player goes first because robots need to know their place
  let playerTurn = player;

  // Place all ships for computer randomly
  computer.placeRandomShip(computer.playerboard, 5, "Carrier");
  computer.placeRandomShip(computer.playerboard, 4, "Battleship");
  computer.placeRandomShip(computer.playerboard, 3, "Destroyer");
  computer.placeRandomShip(computer.playerboard, 3, "Submarine");
  computer.placeRandomShip(computer.playerboard, 2, "Patrol Boat");

  // FOR TESTING - Set up all ships for player randomly
  player.placeRandomShip(player.playerboard, 5, "Carrier");
  player.placeRandomShip(player.playerboard, 4, "Battleship");
  player.placeRandomShip(player.playerboard, 3, "Destroyer");
  player.placeRandomShip(player.playerboard, 3, "Submarine");
  player.placeRandomShip(player.playerboard, 2, "Patrol Boat");

  //Test
  findCell(0, 0);

  while (playerTurn) {
    // Set up event listener on computer's game board
    setUpListener(computer);
    refreshTurn(player);
    break;
  }

  while (!playerTurn) {
    teardownListener(computer);
    refreshTurn(computer);
    let coords = computer.randomAttack(player.playerboard)!;
    attackCell(findCell(coords[0], coords[1]), player);
    break;
  }

  break;
}
