import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

export class Player {
  name: string;
  player: boolean;
  playerboard: Gameboard;

  constructor(name: string, player: boolean, board: Gameboard) {
    this.name = name;
    this.player = player;
    this.playerboard = board;
  }

  attack(x: number, y: number, gameboard: Gameboard) {
    if (this.checkSpace(x, y, gameboard)) {
      gameboard.receiveAttack(x, y);
    }
  }

  private checkSpace(x: number, y: number, gameboard: Gameboard) {
    return gameboard.board[y][x] === 0;
  }

  randomAttack(gameboard: Gameboard) {
    const x = Math.round(Math.random() * 10);
    const y = Math.round(Math.random() * 10);
    if (this.checkSpace(x, y, gameboard)) {
      this.attack(x, y, gameboard);
    } else {
      // If move is invalid, call function again
      this.randomAttack(gameboard);
    }
  }

  placeRandomShip(gameboard: Gameboard, size: number, name: string) {
    let x: number = Math.round(Math.random() * 10);
    // TO DO - Subtract x/y value based on size of ship so the ship cannot go past the end of the board (x-axis for horizontal, y-axis for vertical)
    let y: number = Math.round(Math.random() * 10);
    const horiz: boolean = !!Math.round(Math.random());
    if (x === 10) {
      x--;
    }
    if (y === 10) {
      y--;
    }
    if (horiz) {
      x = Math.abs(x - size);
    } else {
      y = Math.abs(y - size);
    }
    if (gameboard.checkSpaceForShip(size, horiz, y, x)) {
      const ship: Ship = new Ship(size, name);
      gameboard.placeShip(ship, true, y, x);
      console.log(`Placed at ${x}, ${y}`);
    } else {
      console.log(`${name} invalid placement at ${x}, ${y}, Horiz: ${horiz}`);
      return 0;
    }
  }
}
