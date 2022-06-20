import { Gameboard } from "./gameboard";

test("Builds board", () => {
  const board = new Gameboard();
  expect(board.board).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("places horizontal ship", () => {
  const board = new Gameboard();
  board.placeShip(2, true, 0, 0);
  expect(board.board[0][0]).toBe(1);
  expect(board.board[0][1]).toBe(1);
});

test("places vertical ship", () => {
  const board = new Gameboard();
  board.placeShip(2, false, 0, 0);
  expect(board.board[0][0]).toBe(1);
  expect(board.board[1][0]).toBe(1);
});

test("Attack misses", () => {
  const board = new Gameboard();
  expect(board.receiveAttack(0, 0)).toBe(2);
});

test("Attack hits", () => {
  const board = new Gameboard();
  board.placeShip(2, false, 0, 0);
  expect(board.receiveAttack(0, 0)).toBe(3);
});

test("Attack invalid", () => {
  const board = new Gameboard();
  board.placeShip(2, false, 0, 0);
  board.receiveAttack(0, 0);
  expect(board.receiveAttack(0, 0)).toBe(0);
});

test("All ships not sunk", () => {
  const board = new Gameboard();
  board.placeShip(2, true, 0, 0);
  expect(board.checkAllSunk()).toBe(false);
});

test("All ships sunk", () => {
  const board = new Gameboard();
  board.placeShip(2, true, 0, 0);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  expect(board.checkAllSunk()).toBe(true);
});
