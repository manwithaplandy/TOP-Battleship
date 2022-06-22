import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { drawBoard, setUpListener } from "./dom.js";
let game_on = true;
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
while (game_on) {
    //Test placeholder values; replace with inputs later
    const player = new Player("Player", true, new Gameboard());
    const computer = new Player("Computer", false, new Gameboard());
    drawBoard(player.playerboard, player.name);
    drawBoard(computer.playerboard, computer.name);
    // Human player goes first because robots need to know their place
    let playerTurn = player;
    // Set up event listener on computer's game board
    setUpListener(computer);
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
    break;
}
