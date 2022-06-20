import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
let game_on = false;
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
const shipLegend = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
};
player.placeRandomShip(player.playerboard, 5, "Carrier");
player.placeRandomShip(player.playerboard, 4, "Battleship");
player.placeRandomShip(player.playerboard, 3, "Destroyer");
player.placeRandomShip(player.playerboard, 3, "Submarine");
player.placeRandomShip(player.playerboard, 2, "Patrol Boat");
computer.placeRandomShip(computer.playerboard, 5, "Carrier");
computer.placeRandomShip(computer.playerboard, 4, "Battleship");
computer.placeRandomShip(computer.playerboard, 3, "Destroyer");
computer.placeRandomShip(computer.playerboard, 3, "Submarine");
computer.placeRandomShip(computer.playerboard, 2, "Patrol Boat");
// while (game_on) {
//   break;
// }
