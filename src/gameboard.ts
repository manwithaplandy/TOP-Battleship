export class Gameboard {
  board: number[][];
  shipCoords: number[][];

  constructor() {
    this.board = this.buildBoard();
    this.shipCoords = [];
  }
  // Gameboard legend:
  // "0" is an empty space
  // "1" has a ship on it
  // "2" has a miss
  // "3" has a hit (and therefore a ship)

  private buildBoard() {
    return new Array(10).fill(new Array(10).fill(0));
  }

  placeShip(size: number, horizontal: boolean, y: number, x: number) {
    // Sets game board values, and returns a list of coordinates
    if (horizontal) {
      for (let i = 0; i < size; i++) {
        this.shipCoords.push([x + i, y]);
        this.board[y][x + i] = 1;
      }
    } else {
      for (let i = 0; i < size; i++) {
        this.shipCoords.push([x, y + 1]);
        this.board[y + 1][x] = 1;
      }
    }
  }

  private changeValue(x: number, y: number, value: number) {
    this.board[y][x] = value;
  }

  private removeCoords(x: number, y: number) {
    this.shipCoords = this.filterArray(this.shipCoords, [x, y]);
  }

  filterArray(array: number[][], value: number[]) {
    return array.filter((f) => f[0] != value[0] && f[1] != value[1]);
  }

  receiveAttack(x: number, y: number) {
    // Take in coordinates, return number code for new space result
    if (this.board[y][x] > 1) {
      this.changeValue(x, y, 0);
      return 0;
    } else if (this.board[y][x] === 1) {
      this.changeValue(x, y, 3);
      this.removeCoords(x, y);
      return 3;
    } else if (this.board[y][x] === 0) {
      this.changeValue(x, y, 2);
      return 2;
    }
  }

  checkAllSunk() {
    return this.shipCoords.length === 0;
  }
}
