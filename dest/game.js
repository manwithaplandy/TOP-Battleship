import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";
import { drawBoard } from "./dom.js";
let game_on = false;
// For testing
document.addEventListener("click", () => {
    game_on = true;
    console.log(`Game on: ${game_on}`);
});
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
    let playerTurn = player;
    player.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
    player.playerboard.placeShip(new Ship(4, "Battleship"), true, 0, 1);
    player.playerboard.placeShip(new Ship(3, "Destroyer"), true, 0, 2);
    computer.playerboard.placeShip(new Ship(5, "Carrier"), true, 0, 0);
    computer.playerboard.placeShip(new Ship(4, "Battleship"), true, 0, 1);
    computer.playerboard.placeShip(new Ship(3, "Destroyer"), true, 0, 2);
}
