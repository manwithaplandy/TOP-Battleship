import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

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
    const x: number = Math.round(Math.random() * 10);
    const y: number = Math.round(Math.random() * 10);
    const horiz: boolean = !!Math.round(Math.random());
    const ship: Ship = new Ship(size, name);
    if (gameboard.checkSpaceForShip(ship, horiz, y, x)) {
      gameboard.placeShip(ship, true, y, x);
    } else {
      this.placeRandomShip(gameboard, size, name);
    }
  }
}
