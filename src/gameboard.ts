import { Ship } from "./ship";

export type shipSpot = [ship: Ship, number: number];

export class Gameboard {
  board: number[][] | shipSpot[][];

  constructor() {
    this.board = this.buildBoard();
  }

  // Game board value legend
  // 0 = empty space
  // Ship Object array = un-hit ship
  // 2 = miss
  // 3 = hit

  // Ships legend:
  // Size / Name
  // 5 / Carrier
  // 4 / Battleship
  // 3 / Destroyer
  // 3 / Submarine
  // 2 / Patrol Boat

  private ships: Ship[] = [];

  private buildBoard() {
    return new Array(10).fill(new Array(10).fill(0));
  }

  placeShip(ship: Ship, horizontal: boolean, y: number, x: number) {
    // Check that a ship doesn't already exist in any of the spots
    let pass = true;
    if (horizontal) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[y][x + i] != 0) {
          pass = false;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[y + 1][x] != 0) {
          pass = false;
        }
      }
    }
    // Sets value of cell to reference ship sitting on it, and which part of the ship it contains
    if (pass) {
      if (horizontal) {
        for (let i = 0; i < ship.length; i++) {
          this.board[y][x + i] = [ship, i + 1];
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.board[y + 1][x] = [ship, i + 1];
        }
      }
      // Append ship to the ships array for sunk checking
      this.ships.push(ship);
    }
  }

  private sendHit(ship: Ship, spot: number) {
    ship.hit(spot);
  }

  private changeValue(x: number, y: number, value: number) {
    this.board[y][x] = value;
  }

  receiveAttack(x: number, y: number) {
    // Take in coordinates, return number code for new space result
    if (typeof this.board[y][x] === "number") {
      // Space does not contain un-hit ship
      if (this.board[y][x] > 1) {
        // Space has already been attacked -> invalid move
        this.changeValue(x, y, 0);
        return 0;
      } else if (this.board[y][x] === 0) {
        // Space is empty -> miss
        this.changeValue(x, y, 2);
        return 2;
      }
    } else {
      // Space has a ship on it -> hit
      const theArr: shipSpot = this.board[y][x] as shipSpot;
      this.sendHit(theArr[0], theArr[1]);
      this.changeValue(x, y, 3);
      return 3;
    }
  }

  checkAllSunk() {
    // Checks all ships are sunk
    // To check all sunk, iterate through array running Ship.isSunk(); on each
    let allSunk = true;
    this.board.forEach((arr) => {
      arr.forEach((cell) => {
        if (typeof cell != "number") {
          allSunk = false;
        }
      });
    });
    return allSunk;
  }
}
