export class Ship {
  length: number;
  hitMarker: boolean[];
  sunk: boolean;

  constructor(length: number) {
    this.length = length;
    this.hitMarker = new Array(length);
    this.sunk = false;
  }

  hit(number: number) {
    this.hitMarker[number] = true;
  }

  isSunk() {
    return this.checkArrayTruth(this.hitMarker);
  }

  checkArrayTruth(array: any[]) {
    return (array: any[]) => array.every(Boolean);
  }
}
