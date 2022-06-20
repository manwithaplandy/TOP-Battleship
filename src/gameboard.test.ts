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
  expect(board.board[0][0]).toBe(2);
  expect(board.board[0][1]).toBe(2);
});

test("places vertical ship", () => {
  const board = new Gameboard();
  board.placeShip(2, false, 0, 0);
  expect(board.board[0][0]).toBe(2);
  expect(board.board[1][0]).toBe(2);
});
