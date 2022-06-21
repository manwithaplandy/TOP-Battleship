// Draw game boards
// Draw ships on player's board
// Refresh board when turn is taken
// Display whose turn it is
// Display notification for "hits", "misses", and "WIN!"
const displayContainer = document.querySelector(".display-container");
const playerDisplay = document.querySelector(".display");
const boardContainer = document.querySelector(".board-container");
const playerBoard = document.querySelector(".player-board");
const computerBoard = document.querySelector(".computer-board");
export function drawBoard(board, player) {
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        if (player === "Player") {
            playerBoard.appendChild(row);
        }
        else {
            computerBoard.appendChild(row);
        }
    }
}
export function updateCell(cell, value) {
    cell.textContent = value;
}
export function cellAttacked(cell, hit) {
    cell.classList.add("attacked");
    if (hit) {
        cell.classList.add("hit");
    }
    else {
        cell.classList.add("miss");
    }
}
export function refreshTurn(player) {
    playerDisplay.textContent = player.name;
}
document.addEventListener("click", (c) => {
    const cell = c;
    const cellTarget = cell.target;
    const currentBoard = cellTarget.parentNode.parentNode;
    console.log(cell);
});
