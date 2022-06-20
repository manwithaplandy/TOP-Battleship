"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(length) {
        this.length = length;
        this.hitMarker = new Array(length);
        this.sunk = false;
    }
    hit(number) { }
}
exports.Ship = Ship;
