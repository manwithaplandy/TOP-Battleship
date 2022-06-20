export class Gameboard {
  board: number[][];
  constructor() {
    this.board = this.buildBoard();
  }
  // Gameboard legend:
  // "0" is an empty space
  // "1" has a miss
  // "2" has a ship on it
  // "3" has a hit (and therefore a ship)

  private buildBoard() {
    return new Array(10).fill(new Array(10).fill(0));
  }

  placeShip(size: number, horizontal: boolean, array: number, index: number) {
    if (horizontal) {
      for (let i = 0; i < size; i++) {
        this.board[array][index + i] = 2;
      }
    } else {
      for (let i = 0; i < size; i++) {
        this.board[array + 1][index] = 2;
      }
    }
  }

  receiveAttack(x: number, y: number) {}
}
