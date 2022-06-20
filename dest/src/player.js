import { Ship } from "./ship.js";
export class Player {
    constructor(name, player, board) {
        this.name = name;
        this.player = player;
        this.playerboard = board;
    }
    attack(x, y, gameboard) {
        if (this.checkSpace(x, y, gameboard)) {
            gameboard.receiveAttack(x, y);
        }
    }
    checkSpace(x, y, gameboard) {
        return gameboard.board[y][x] === 0;
    }
    randomAttack(gameboard) {
        const x = Math.round(Math.random() * 10);
        const y = Math.round(Math.random() * 10);
        if (this.checkSpace(x, y, gameboard)) {
            this.attack(x, y, gameboard);
        }
        else {
            // If move is invalid, call function again
            this.randomAttack(gameboard);
        }
    }
    placeRandomShip(gameboard, size, name) {
        const x = Math.round(Math.random() * 10);
        const y = Math.round(Math.random() * 10);
        const horiz = !!Math.round(Math.random());
        if (gameboard.checkSpaceForShip(size, horiz, y, x) && x < 10 && y < 10) {
            const ship = new Ship(size, name);
            gameboard.placeShip(ship, true, y, x);
            console.log(`Placed at ${x}, ${y}`);
            // console.log(gameboard);
        }
        else {
            console.log(`${name} invalid placement at ${x}, ${y}, Horiz: ${horiz}`);
            this.placeRandomShip(gameboard, size, name);
        }
    }
}
